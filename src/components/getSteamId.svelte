<script>
    let searchParam = '';

    async function handleSubmit(){
        const payload = {
			searchParam: searchParam,
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
            let id = res.body.response

            if(id.success == 1){
                console.log('Fetch successful')
                console.log(id.steamid)

                searchParam = id.steamid
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
    

    .id-lookup{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
    }

    p{
        color: aliceblue;
		font-family: 'Inter', sans-serif;
        padding-right: 10px;
    }

    input{
        height: 2rem;
        border-radius: 5px;
    }

    button{
        padding: 10px;
		color: white;
		background-color: #2196F3;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
    }
</style>