<script>
	let searchParam = '';

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
	<p>Find Id</p>
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			<input bind:value={searchParam} required />
		</label>

		<button class="submit" type="submit">🔍</button>
	</form>
</div>

<style>
	.id-lookup {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
	}

	p {
		color: aliceblue;
		font-family: 'Inter', sans-serif;
		padding-right: 10px;
	}

	input {
		height: 2rem;
		border-radius: 5px;
		width: 75%;
	}

	button {
		padding: 10px;
		color: white;
		background-color: #2196f3;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	/* Media query for screen width 520px or smaller */
	@media (max-width: 520px) {
		input {
			font-size: 12px;
			padding: 8px;
			height: 10px;
			padding-right: 0px;
		}

		button {
			font-size: 10px;
			padding: 8px;
		}

		.id-lookup {
			font-size: 14px;
			margin-top: 5px;
			margin-bottom: 5px;
		}

		.id-lookup p {
			display: none; /* Hide the paragraph tag */
		}

		form{
			display: flex;
		}
	}
</style>
