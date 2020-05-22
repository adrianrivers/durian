<svelte:options tag="durian-image" />

<script>
  export let src = 'Image src not provided';
  export let alt = 'Alt text not provided';
</script>

<style>
  div {
    position: relative;
    width: 200px;
    height: 200px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>

<div>
  <img src="{src}" alt="{alt}">
</div>
