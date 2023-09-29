<script>
	import SteamProfile from '../components/steamProfile.svelte';
	import Dropdown from '../components/dropdown.svelte';
	import Modal from '../components/modal.svelte';

	let userId = '';

	/**
	 * @type {boolean}
	 */
	let success;

	/**
	 * @type {any}
	 */
	let profile;

	let showModal = false;

	async function handleSubmit() {
		const payload = {
			userId: userId
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
			console.log(res);
			profile = res.body;
			success = true;
		} else {
			console.error('Empty or invalid response from API');
		}
	}
</script>


<div class="page-content">
	
	<div class="user-form">

		<div class="steam-id">
			<p>SteamID</p>

			<button on:click={() => (showModal = true)}> ?  </button>
			<Modal bind:showModal>
				<h2 slot="header">
					How to use this site
				</h2>
			
				<ol class="definition-list">
					<li>Enter the person's custom tag, such as "wlilliam" or a steam64ID and click the search button.</li>
					<li>Choose the game from which you want to retrieve an achievement. Please note that this site is unable to access achievements from <strong>private profiles</strong>.</li>
				</ol>
			</Modal>
		</div>

		<form on:submit|preventDefault={handleSubmit}>
			<label>
				<input bind:value={userId} required />
			</label>

			<button class="submit" type="submit">🔍</button>
		</form>
	</div>

	<div class="profile-info">
		{#if success}
			<SteamProfile image={profile.img} name={profile.name} />
			{#key (profile.ownedGames, userId, profile.customUrl)}
				<Dropdown content={profile.ownedGames} {userId} customUrl={profile.customUrl} />
			{/key}
		{/if}
	</div>
</div>

<style>
	.page-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.user-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
		padding: 20px;
		margin: 20px;
		border-radius: 5px;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
	}

	input {
		margin: 10px 0;
		padding: 10px;
		font-size: 16px;
		border: none;
		border-radius: 5px;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.steam-id{
		display: flex;
	}

	button{
		border-style: none;
		background-color: #f5f5f5;
		font-size: 16px;
		font-weight: bolder;
	}

	.submit {
		padding: 10px;
		font-size: 16px;
		color: white;
		background-color: #2196f3;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	p {
		color: black;
		font-family: 'Poppins', sans-serif;
		font-size: 20px;
	}

	.profile-info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.submit:hover {
		background-color: #0d8bf1;
	}
</style>
