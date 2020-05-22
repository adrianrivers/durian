<svelte:options tag="durian-card" />

<script>
  export let heading;
</script>

<style>
  section {
    font-family: Arial, Helvetica, sans-serif;
    padding: 3rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    position: relative;
  }

  section:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }
</style>

<section>
  <h3>{heading}</h3>
  <p>
   <slot/>
  </p>
</section>
