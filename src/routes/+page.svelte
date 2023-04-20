<script>
	import SteamProfile from '../components/steamProfile.svelte';
	import { goto } from '$app/navigation';

	let userId = '';

	/**
	 * @type {boolean}
	 */
	let success;

	let profile = {
		name: '',
		img: ''
	};

	async function handleSubmit() {
		const payload = {
			userId: userId,
			type: 'steamID64'
		};
		// Call an API to authenticate the user
		const response = await fetch(`/api`, {
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
			console.log('Response from API:', res);
			profile.img = res.body[0].avatarfull;
			profile.name = res.body[0].personaname;
			success = true;
		} else {
			console.error('Empty or invalid response from API');
		}
	}
</script>

<h1>Welcome to my AchievementPicker</h1>

<div class="login-form">
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
{/if}
