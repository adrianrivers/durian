<svelte:options tag="durian-button" />

<script>
	function handleClick() {
		console.log('Clicked')
	}
</script>

<style>
  button {
    border: hotpink;
  }
</style>

<button on:click={handleClick}>
	Click me
</button>
