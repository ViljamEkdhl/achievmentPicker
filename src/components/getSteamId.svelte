<script>
    let searchParam = '';

    async function handleSubmit(){
        const payload = {
			searchParam: searchParam,
		};
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
        padding-right: 10px;
    }
</style>