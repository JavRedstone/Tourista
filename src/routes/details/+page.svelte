<script lang="ts">
  import { places } from '$lib/stores/places';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { navigating } from '$app/stores';
  import doubleDown from '$lib/images/doubleDown.svg';
  import forward from '$lib/images/forward.svg';
  import back from '$lib/images/back.svg';

  const locations = places();
  const scrollValue = 500;
  let y: number = 0;
  let distances = []; // n - 1 distances
  let times: string[] = []; // n - 1 times
  let descriptions: string[] = [];
  let pageHeight: number = ($locations.length-1) * scrollValue;
  $: currentSlide = Math.floor(y / scrollValue);
  $: transitionDirection = y%scrollValue > scrollValue/2 ? -700 : 700;
  onMount(async () => {
    // generateLocations();
    // await calculateDistancesAndTimes();

    $: navigating && generateLocations();
    $: navigating && await calculateDistancesAndTimes();
  });

  function generateLocations(): void {
    for (let location of $locations) {
      handleGenerate(location);
    }
  }

  async function calculateDistancesAndTimes(): void {
    distances = [];
    times = [];
    for (let i = 0; i < $locations.length - 1; i++) {
      let location = $locations[i];
      let nextLocation = $locations[i + 1];
      let response = await fetch('/distime', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          location: location,
          nextLocation: nextLocation
        })
      }).then(res => res.json()).catch(err => {});
      if (response.data.distance != null) {
        distances[$locations.indexOf(location)] = response.data.distance;
      }
      if (response.data.duration != null) {
        times[$locations.indexOf(location)] = response.data.duration;
      }
    }
  }

  const handleGenerate = async (location) => {
    const response = await fetch("/nearby", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ location: location.toLowerCase().trim(), type: 'description' })
    }).then(res => res.json());
    descriptions[$locations.indexOf(location)] = response.data[0];
  }
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <title>Travel Plan Details</title>
</svelte:head>

<main style:margin-bottom={pageHeight + scrollValue - 1 + 'px'}>
  {#if $locations[currentSlide]}
    {#key currentSlide}
      <div class="card" in:fly={{x: transitionDirection, duration: 1000}} out:fly={{x: -transitionDirection, duration: 1000}}>
        <div>
          {#if times[currentSlide-1] && currentSlide !== 0}
            <img src={back} alt="back" />
            <p>{times[currentSlide-1]}</p>
          {/if}
        </div>
        <div>
          <h2>{currentSlide + 1}. {$locations[currentSlide]}</h2>
          {#if descriptions[currentSlide] && descriptions[currentSlide] !== ""}
            <span>{descriptions[currentSlide]}</span>
          {:else}
            <span>There is not enough information about this location. Be the first to find out!</span>
          {/if}
        </div>
        <div>
          {#if times[currentSlide] && currentSlide !== $locations.length - 1}
            <img src={forward} alt="forward" />
            <p>{times[currentSlide]}</p>
          {/if}
        </div>
      </div>
    {/key}
  {/if}
</main>
<section>
  <span>Scroll Down to View More</span>
  <img src={doubleDown} alt="arrow" />
</section>

<style lang="scss">
  :root::-webkit-scrollbar {
    display: none;
  }
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    div.card {
      display: grid;
      align-items: center;
      gap: 2rem;
      grid-template-columns: 5rem 1fr 5rem;
      grid-template-rows: 1fr;
      position: fixed;
      text-align: center;
      width: max(60%, 30rem);
      margin: 0rem;
      padding: 1rem 2rem;
      border-radius: 2rem;
      background-color: rgba($background, 0.6);
      box-shadow: 0.1em 0.1em 0.2em rgba(#000, 0.2);
      div {
        h2 {
          font-size: 2rem;
          margin: 0 0 1rem 0;
        }
        span {
          font-size: 1.3rem;
        }
        p {
          margin: 0;
        }
      }
    }
  }
  section {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
</style>