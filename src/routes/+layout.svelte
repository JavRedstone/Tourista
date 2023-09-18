<script lang="ts">
  import "$lib/styles/global.scss";
  import Background from "$lib/components/Background.svelte";

</script>

<nav>
  <a class="logo" href="/">
    <img src="/logo.png" alt="logo" />
  </a>
  <div>
    <a href="/">Home</a>
    <a href="/explore">Explore</a>
    <a href="/travel">Travel</a>
    <a href="/details">Travel Details</a>
  </div>
</nav>
<Background />
<slot />

<style lang="scss">
  nav {
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    height: 4rem;
    background-color: rgba($background, 0.4);
    backdrop-filter: blur(1em);
    box-shadow: 0 0.1em 0.2em rgba(#000, 0.2);
    transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
    a {
      margin-left: 1rem;
      img {
        height: 100%;
      }
    }
    div {
      display: flex;
      align-items: center;
      gap: 2em;
      margin-right: 2em;
      a {
        position: relative;
        text-decoration: none;
        color: $text;
        font-size: 1.3rem;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.1em;
          border-radius: 0.1em;
          background-color: #000;
          transform: scaleX(0);
          transition: transform 0.2s ease-in-out;
        }
        &:hover::after, &.active::after {
          transform: scaleX(1);
        }
      }
    }
  }
</style>