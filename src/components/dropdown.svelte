<script lang="ts">
	export let content: Array<any>;
    export let userId: any;

	async function handleSubmit(event: Event & { currentTarget: HTMLSelectElement }) {
        const payload = {
			userId: userId,
            appId: event.currentTarget.value,
		};
        const response = await fetch(`/getAchievements`, {
			method: 'POST',
			body: JSON.stringify(payload)
		});
    }
</script>

<select bind:value={content} on:change={handleSubmit}>
	{#each content as item}
		<option value={item.appid}>{item.name}</option>
	{/each}
</select>

<style>
</style>
