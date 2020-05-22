<svelte:options tag="durian-card" />

<script>
  export let heading;
</script>

<style>
  section {
    border-radius: 3px;
    border: 1px solid black;
    padding: 3rem;
  }
</style>

<section>
  <h3>{heading}</h3>
  <p>
   <slot/>
  </p>
</section>
