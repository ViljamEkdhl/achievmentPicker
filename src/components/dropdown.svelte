<script>
	/**
	 * @type {Array<any>}
	 */
	export let content;
	/**
	 * @type {any}
	 */
	let appid;

	function handleSubmit() {}
</script>

<select bind:value={content} on:change={handleSubmit}>
	{#each content as item}
		<option value={item.appid}>{item.name}</option>
	{/each}
</select>

<style>
</style>
