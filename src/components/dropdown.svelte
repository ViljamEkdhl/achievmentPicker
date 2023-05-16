<script lang="ts">
	import Achievement from "./achievement.svelte";
	export let content: Array<any>;
	export let userId: any;
	export let customUrl: any;

	let showAchievement = false;

	let achievements: any;

	async function handleSubmit(event: Event & { currentTarget: HTMLSelectElement }) {
		const payload = {
			userId: userId,
			appId: event.currentTarget.value,
			customUrl: customUrl
		};
		const response = await fetch(`/getAchievements`, {
			method: 'POST',
			body: JSON.stringify(payload)
		});
		const res = await response.json().catch((err) => {
			console.error('Error parsing response as JSON:', err);
			return null;
		});

		if (res) {
			achievements = res.body;
			showAchievement = true;
		} else {
			console.error('Empty or invalid response from API');
		}

	}
</script>

<select on:change={handleSubmit}>
	{#each content as item}
		<option value={item.appid}>{item.name}</option>
	{/each}
</select>


{#if showAchievement}
	<svelte:component this={Achievement} input={achievements}/>
{/if}

<style>
</style>
