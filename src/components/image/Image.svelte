<svelte:options tag="durian-image" />

<script>
  export let src;
  export let alt = 'No alt text was provided';
</script>

<style>
  div {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid hotpink;
    border-radius: 3px;
    padding: 3em;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
</style>

<div>
  <img src="{src}" alt="{alt}">
</div>
