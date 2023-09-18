<script lang="ts">
  import { onMount } from "svelte";
  let y = 0, r = 96, g = 199, b = 239, t = 0;
  onMount(() => {
    const animate = async () => {
      await new Promise((r) => setTimeout(r, 1000 / 60));
      r += Math.sin(t)*0.4;
      g += Math.cos(t)*0.4;
      b += Math.sin(t)*0.4;  
      t += 0.01;
      requestAnimationFrame(animate);
    }
    animate();
  });
</script>

<svelte:window bind:scrollY={y} />
<div style:background={`linear-gradient(${135+y/30}deg,rgba(${r}, ${g}, ${b}, 0.8) 0%,rgb(238, 237, 237) 85%)`} />

<style lang="scss">
  div {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>