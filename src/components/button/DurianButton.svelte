<svelte:options tag="durian-button" />

<script>
	function handleClick() {
		console.log('Clicked')
	}
</script>

<style>
  button {
    padding: 8px 12px;
    text-transform: uppercase;
    background-color: #FFF;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    border: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
  }

  button:active {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.18), 0 1px 2px rgba(0, 0, 0, 0.3)
  }
</style>

<button on:click={handleClick}>
	Durian button
</button>
