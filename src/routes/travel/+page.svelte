<script lang="ts">
    import { onMount } from 'svelte';
    import { places } from '$lib/stores/places';
    import { navigating } from '$app/stores';
    import { dndzone } from 'svelte-dnd-action';
    import dragIndicator from '$lib/images/drag.svg';

    const locations = places();
    let transportation: string = 'driving';
    let travelMode = null;
    
    let newLocation: string = "";
    let totalDistance = 0;
    let totalTime = 0;

    onMount(() => {
        initMap();
    });
    
    let directionsService = null;
    let directionsRenderer = null;
    let map = null;

    function onChangeHandler () {
        setTimeout(
            ()=>{
                calculateAndDisplayRoute(directionsService, directionsRenderer, $locations);

            }
        )

        const directions = directionsRenderer.getDirections();

        // if (directions) {
        //     totalDistance = computeTotalDistance(directions);
        //     totalTime = computeTotalTime();
        // }
    };

    function initMap() {
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
                zoom: 7,
                center: { lat: 0, lng: 0 },
            }
        );


        directionsRenderer.setMap(map);
        
        $: navigating && onChangeHandler();
        // $: travelMode = transportation==='driving'?google.maps.TravelMode.DRIVING:transportation==='walking'?google.maps.TravelMode.WALKING:transportation==='bicycling'?google.maps.TravelMode.BICYCLING:google.maps.TravelMode.TRANSIT;

        onChangeHandler();
    }

    function calculateAndDisplayRoute(
        service: google.maps.DirectionsService,
        display: google.maps.DirectionsRenderer,
        wp: any[] = []
    ) {
        let wayp: google.maps.DirectionsWaypoint[] = [];
        for (let w of wp) {
            if (w !== wp[0] && w !== wp[wp.length - 1]) {
                wayp.push({
                    location: w,
                    stopover: true,
                });
            }
        }
        if (wp.length > 0) {
            // console.log(travelMode)
            service
                .route({
                    origin: wp[0],
                    destination: wp[wp.length - 1],
                    waypoints: wayp,
                    // travelMode: travelMode ?? google.maps.TravelMode.DRIVING,
                    travelMode: transportation==='driving'?google.maps.TravelMode.DRIVING:transportation==='walking'?google.maps.TravelMode.WALKING:transportation==='bicycling'?google.maps.TravelMode.BICYCLING:google.maps.TravelMode.TRANSIT
                })
                .then((result: google.maps.DirectionsResult) => {
                    display.setDirections(result);
                    totalDistance = computeTotalDistance(result)
                    totalTime = computeTotalTime();
                })
                .catch((e) => {
                    alert("Invalid path");
                });
        }
    }
        // function getTravelMode(): google.maps.TravelMode {
    //     switch (transportation) {
    //         case 'driving':
    //             return google.maps.TravelMode.DRIVING;
    //         case 'walking':
    //             return google.maps.TravelMode.WALKING;
    //         case 'bicycling':
    //             return google.maps.TravelMode.BICYCLING;
    //         case 'transit':
    //             return google.maps.TravelMode.TRANSIT;
    //         default:
    //             return google.maps.TravelMode.DRIVING;
    //     }
    // }

    function sToTime(s) {
        let day = Math.floor(s / (3600 * 24));
        let hour = Math.floor((s % (3600 * 24)) / 3600);
        let minute = Math.floor((s % 3600) / 60);
        let second = Math.floor(s % 60);

        return day + "d " + hour + "h " + minute + "m";
    }

    function computeTotalTime(): number {
        let s: number = 0;
        switch (transportation) {
            case 'driving':
                s = 80;
                break;
            case 'walking':
                s = 5;
                break;
            case 'bicycling':
                s = 20;
                break;
            case 'transit':
                s = 60;
                break;
            default:
                s = 80;
        }
        return (totalDistance / s) * 60 * 60;
    }

    function computeTotalDistance(result: google.maps.DirectionsResult): number {
        let total = 0;
        const myroute = result.routes[0];

        if (!myroute) {
            return;
        }

        for (let i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i]!.distance!.value;
        }

        total = total / 1000;
        return total;
    }
    function removeLocation(location: string | undefined) {
        if (location) locations.remove(location);
        onChangeHandler();
    }
    function addLocation() {
        const directionsService = new google.maps.DirectionsService();
        directionsService
            .route({
                origin: newLocation,
                destination: newLocation,
                waypoints: [],
                travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((r: google.maps.DirectionsResult) => {
                locations.add(newLocation);
                onChangeHandler();
                newLocation = "";
            })
            .catch((e) => {
                alert("Invalid location");
            });
    }
    interface ListItem {
        id: string | number;
        text: string;
    }
    $: items = $locations.map((location, index) => {
        return {
            id: index,
            text: location,
        };
    });
    const handleConsider = event => {
        items = event.detail.items;
    }
    const handleFinalize = event => {
        items = event.detail.items;
        locations.set(items.map(item => item.text));
        onChangeHandler();
    }
</script>

<svelte:head>
    <title>Travel</title>
</svelte:head>

<main>
    <div>
        <div>
            <h1>
                Your Travel Plan:
            </h1>
            <select on:change={onChangeHandler} bind:value={transportation}>
                <option value="driving">Driving</option>
                <option value="walking">Walking</option>
                <option value="bicycling">Bicycling</option>
                <option value="transit">Transit</option>
            </select>
        </div>
        {#if $locations.length === 0}
            <h2 class="noLocations">
                Add a destination in "Explore" to get started!
            </h2>
        {/if}
        <section use:dndzone={{ items: items }} on:consider={handleConsider} on:finalize={handleFinalize}>
            {#each items as item (item.id)}
                <div>
                    <span class="dragContent">
                        <img src={dragIndicator} alt="drag" />
                        {item.text}
                    </span>
                    <button class="remove" on:click={() => removeLocation(item.text)}>Remove</button>
                </div>
            {/each}
        </section>
        <div class="add">
            <h2>Add a Destination:</h2>
            <form on:submit={addLocation}>
                <input type="text" placeholder="Add a destination here" bind:value={newLocation}/>
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
    <div id="map"></div>
    <!-- <h3 class="distance">{Math.round(totalDistance)} km | {sToTime(totalTime)}</h3> -->
</main>


<style lang="scss">
    main {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        height: calc(100vh - 4rem);
        margin-top: 4rem;
        div {
            height: calc(100vh - 4rem);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            div {
                padding: 0 3rem;
                margin: 0;
                display: flex;
                gap: 2rem;
                height: fit-content;
                align-items: center;
                select {
                    outline: none;
                    display: inline-block;
                    height: fit-content;
                    font-size: 1.3rem;
                    padding: 0.8rem 1rem;
                    border: none;
                    border-radius: 1rem;
                    background-color: rgba(255, 255, 255, 0.5);
                    color: $text;
                    transition: 0.2s ease-in-out;
                    &:hover {
                        cursor: pointer;
                        background-color: rgba(255, 255, 255, 0.7);
                        color: $text;
                        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
                    }
                }
            }
            h2.noLocations {
                text-align: center;
                font-size: 2rem;
                font-weight: 400;
                color: $text;
                margin: auto 4rem;
                padding: 0;
            }
            section {
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                outline: none !important;
                margin-top: 0;
                gap: 1rem;
                padding: 0;
                div {
                    margin: 0 3rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 1.5rem;
                    padding: 1rem;
                    border-radius: 1rem;
                    background-color: rgba(255, 255, 255, 0.5);
                    box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
                    span.dragContent {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        img {
                            width: 2rem;
                            height: 2rem;
                        }
                    }
                    button.remove {
                        font-size: 1.3rem;
                        border: none;
                        border-radius: 1rem;
                        padding: 0.5rem 1rem;
                        background-color: $button;
                        color: $white;
                        transition: 0.2s ease-in-out;
                        &:hover {
                            cursor: pointer;
                            background-color: rgba(255, 255, 255, 0.7);
                            color: $text;
                            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
                        }
                    }
                }
            }
            div.add {
                display: flex;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.5);
                box-shadow: 0 -0.05rem 0.2rem rgba(0, 0, 0, 0.2);
                margin: 0;
                padding: 0.5rem 3rem;
                form {
                    input {
                        outline: none;
                        display: inline-block;
                        height: fit-content;
                        font-size: 1.3rem;
                        padding: 0.5rem 1rem;
                        border: none;
                        border-radius: 1rem;
                        background-color: rgba(255, 255, 255, 0.5);
                        color: $text;
                        margin-right: 0.5rem;
                        transition: 0.2s ease-in-out;
                        &:hover {
                            cursor: pointer;
                            background-color: rgba(255, 255, 255, 0.7);
                            color: $text;
                            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
                        }
                    }
                    button {
                        font-size: 1.3rem;
                        border: none;
                        border-radius: 1rem;
                        padding: 0.5rem 1rem;
                        background-color: $button;
                        color: $white;
                        transition: 0.2s ease-in-out;
                        &:hover {
                            cursor: pointer;
                            background-color: rgba(255, 255, 255, 0.7);
                            color: $text;
                            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
                        }
                    }
                }
            }
        }
        div#map {
            position: relative;
            height: 100%;
            width: 100%;
            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
        }
        h3.distance {
            z-index: 2;
            position: absolute;
            bottom: 0.5rem;
            right: 4.3rem;
            background-color: rgba(255, 255, 255, 0.5);
            padding: 0.5rem;
            border-radius: 0.5rem;
        }
    }
</style>