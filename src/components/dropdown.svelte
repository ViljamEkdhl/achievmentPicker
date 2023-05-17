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

<div class="dropdown">
	<select on:change={handleSubmit}>
		{#each content as item}
			<option value={item.appid}>{item.name}</option>
		{/each}
	</select>
	
	
	{#if showAchievement}
		<svelte:component this={Achievement} input={achievements}/>
	{/if}
</div>

<style>
	select{
		width: 100%;
		margin-top: 2rem;
		margin-bottom: 4rem;
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #fff;
		color: #333;
		outline: none;
	}

	select:hover {
  		border-color: #999;
	}

	select:focus {
	border-color: #2196F3;
	box-shadow: 0 0 5px rgba(33, 150, 243, 0.5);
	}

	.dropdown{
		position: relative;
		width: 60%;
	}
</style>
