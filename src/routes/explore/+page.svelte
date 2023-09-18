<script lang="ts">
  import { onMount } from "svelte";
  import { places } from "$lib/stores/places";
  import { fly } from "svelte/transition";

  const locations = places();
  let location: string;
  let option: string;
  let searchResults: string[] = [];
  let waitingForResponse: boolean = false;
  const handleGenerate = async () => {
    searchResults = [];
    waitingForResponse = true;
    const response = await fetch("/nearby", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ location: location.toLowerCase().trim(), type: `list-${option}` })
    }).then(res => res.json());
    const directionsService = new google.maps.DirectionsService();
    response.data = [...new Set(response.data)];
    for (let result of response.data) {
      directionsService
        .route({
          origin: result,
          destination: result,
          waypoints: [],
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((r: google.maps.DirectionsResult) => {
          if (!(result.toLowerCase().trim() === location.toLowerCase().trim() || result.toLowerCase().trim() === "")) {
            searchResults = [...searchResults, result];
          }
        })
        .catch((e) => {
        });
    }
    waitingForResponse = false;
  };
  const handleToggle = (result: string) => {
    if ($locations.includes(result)) {
      locations.remove(result);
    } else {
      locations.add(result);
    }
  }
  $: loadingClass = waitingForResponse ? "loading" : "";
</script>

<svelte:head>
  <title>Explore</title>
</svelte:head>

<main>
  <div>
    <h1>Discover Your Travel Plan</h1>
    <form on:submit={handleGenerate}>
      <input class="location" name="location" type="text" placeholder="What place would you like to visit?" bind:value={location} disabled={waitingForResponse} />
      <select bind:value={option}>
        <option value="attractions">Attractions</option>
        <option value="restaurants">Restaurants</option>
        <option value="accommodation">Accommodations</option>
      </select>
      <button type="submit" disabled={waitingForResponse}>Discover</button>
    </form>
  </div>
  {#each searchResults as result, i}
    <div class="item" in:fly={{delay: i*100, x: -100}}>
      <span>{result}</span>
      <button class:added={$locations.includes(result)} on:click={handleToggle(result)}>{$locations.includes(result)?"Added":"Add"}</button>
    </div>
  {/each}
</main>


<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 7rem 3rem 0 3rem;
    div {
      margin-bottom: 2rem;
      padding: 0 4rem 0 4rem;
      border-radius: 1rem;
      background-color: rgba($background, 0.4);
      box-shadow: 0.1rem 0.1rem 0.2rem rgba(#000, 0.2);
      width: calc(100% - 8rem);
      &.item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.7rem;
        padding: 1rem 2rem;
        width: calc(100% - 4rem);
        button {
          border: none;
          border-radius: 1rem;
          padding: 1rem 2rem;
          background-color: $button;
          color: $white;
          font-size: 1.3rem;
          transition: 0.2s ease-in-out;
          &:hover {
            cursor: pointer;
            background-color: $background;
            color: $text;
            box-shadow: 0 0 0.5rem rgba(#000, 0.2);
          }
          &.added {
            background-color: #fff;
            color: #000;
          }
        }
      } 
      h1 {
        text-align: center;
        font-size: 4rem;
        color: $blue;
        margin-bottom: 1rem;
      }
      form {
        width: 100%;
        margin-bottom: 4rem;
        display: flex;
        gap: 1rem;
        select {
          padding: 1rem 2rem 1rem 0.6rem;
          border-radius: 1rem;
          font-size: 1.3rem;
          border: none;
          background-color: #fff;
          transition: 0.2s ease-in-out;
          &:focus, &:hover {
            outline: none;
            box-shadow: 0 0 0.5rem rgba(#000, 0.2);
          }
        }
        button {
          position: relative;
          border: none;
          border-radius: 1rem;
          padding: 1rem 2rem;
          font-size: 1.3rem;
          color: $white;
          background-color: $button;
          transition: 0.2s ease-in-out;
          &:hover {
            cursor: pointer;
            background-color: $background;
            color: $text;
            box-shadow: 0 0 0.5rem rgba(#000, 0.2);
          }
          &:disabled {
            background-color: $button;
            color: transparent;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              border: 0.2rem solid #fff;
              border-top-color: $button;
              animation: spin 1s linear infinite;
            }
            &:hover {
              box-shadow: none;
            }
          }
          @keyframes spin {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        }
        input {
          padding: 1rem 2rem;
          border-radius: 1rem;
          font-size: 1.3rem;
          border: none;
          background-color: #fff;
          flex: 1;
          transition: 0.2s ease-in-out;
          &:focus, &:hover {
            outline: none;
            box-shadow: 0 0 0.5rem rgba(#000, 0.2);
          }
          &.location {
            background-color: #fff;
            flex: 1;
            &:focus, &:hover {
              outline: none;
              cursor: text;
            }
          }
        }
      }
    }
  }
</style>