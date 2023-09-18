<script lang="ts">
</script>

<svelte:head>
  <title>Tourista</title>
</svelte:head>

<main>
  <div class="title">
    <h1>Tourista</h1>
  </div>
  <h2>The best way to travel</h2>
  <a href="/explore">
    Explore Now
  </a>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h1 {
      font-size: 10rem;
      line-height: 0;
      margin-bottom: 4rem;
      color: $blue;
    }
    h2 {
      font-size: 2rem;
      color: $text;
      margin-bottom: 2rem;
    }
    a {
      text-decoration: none;
      color: $white;
      border: none;
      border-radius: 1rem;
      padding: 1rem 2rem;
      font-size: 1.3rem;
      background-color: $button;
      transition: 0.2s ease-in-out;
      &:hover {
        cursor: pointer;
        background-color: $background;
        color: $text;
        box-shadow: 0 0 0.5rem rgba(#000, 0.2);
      }
    }
  }
</style>