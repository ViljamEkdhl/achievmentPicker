<script>
    /**
     * @type {Array<any>}
     */
	export let content;

</script>



<select bind:value={content}>
	{#each content as item}
		<option value={item.appid}>{item.name}</option>
	{/each}
</select>

<style>
</style>
