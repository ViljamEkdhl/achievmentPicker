<script>
	import SteamProfile from '../components/steamProfile.svelte';
	import { goto } from '$app/navigation';
	import Dropdown from '../components/dropdown.svelte';

	let userId = '';

	/**
	 * @type {boolean}
	 */
	let success;

  	/**
	 * @type {any}
	 */
	let profile;

	async function handleSubmit() {
		const payload = {
			userId: userId,
		};
		// Call an API to authenticate the user
		const response = await fetch(`/getUser`, {
			method: 'POST',
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const res = await response.json().catch((err) => {
			console.error('Error parsing response as JSON:', err);
			return null;
		});

		if (res) {
			profile = res.body;
			success = true;
		} else {
			console.error('Empty or invalid response from API');
		}
	}
</script>

<h1>Welcome to my AchievementPicker</h1>

<div class="user-form">
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			steamID64:
			<input bind:value={userId} required />
		</label>

		<button type="submit">Generate</button>
	</form>
</div>

{#if success}
	<SteamProfile image={profile.img} name={profile.name} />
  
  <Dropdown content={profile.ownedGames} userId={userId}/>
{/if}
