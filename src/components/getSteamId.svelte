<script>
	import Modal from '../components/modal.svelte';

	let searchParam = '';
	let showModal = false;

	async function handleSubmit() {
		const payload = {
			searchParam: searchParam
		};

		const response = await fetch(`/getId`, {
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
			let id = res.body.response;

			if (id.success == 1) {
				console.log('Fetch successful');
				console.log(id.steamid);

				searchParam = id.steamid;
			}
		} else {
			console.error('Empty or invalid response from API');
		}
	}
</script>

<div class="id-lookup">
	<button on:click={() => (showModal = true)}> Click me! </button>
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			<input bind:value={searchParam} required />
		</label>

		<button class="submit" type="submit">🔍</button>
	</form>
</div>

<Modal bind:showModal>
	<h2 slot="header">
		How to use this site
	</h2>

	<ol class="definition-list">
		<li>If you don't have the Steam64 ID of the profile you are looking for, you can use the search field in the top right corner. Enter the person's custom tag, such as "wlilliam," and click the search button.</li>
		<li>Copy the Steam64 ID from the search results.</li>
		<li>Paste the copied Steam64 ID into the box located in the middle of the screen.</li>
		<li>Choose the game from which you want to retrieve an achievement. Please note that this site is unable to access achievements from <strong>private profiles</strong>.</li>
	</ol>
</Modal>

<style>
	.id-lookup {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
	}

	input {
		height: 2rem;
		border-radius: 5px;
		width: 75%;
	}

	.submit {
		padding: 10px;
		color: white;
		background-color: #2196f3;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button {
		background-color: #171a21;
		color: aliceblue;
		border: none;
	}

	/* Media query for screen width 520px or smaller */
	@media (max-width: 520px) {
		input {
			font-size: 12px;
			padding: 8px;
			height: 10px;
			padding-right: 0px;
		}

		.submit {
			font-size: 10px;
			padding: 8px;
		}

		.id-lookup {
			font-size: 14px;
			margin-top: 5px;
			margin-bottom: 5px;
		}

		form{
			display: flex;
		}
	}
</style>
