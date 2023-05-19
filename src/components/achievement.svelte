<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
	export let input: Array<{ title: string; description: string }>;
	let randomElement = 0;

	const setRandomIndex = (index: number) => {
		randomElement = index;
	};

  onMount(() => {
		setRandomIndex(Math.floor(Math.random() * input.length));
	});

	onDestroy(() => {
		setRandomIndex(0);
	});

  $: {
    setRandomIndex(Math.floor(Math.random() * input.length));
  }
</script>

{#if input && input.length > 0}
	<div class="achievement">
		<p>Name: {input[randomElement].title}</p>
		<p>Description: {input[randomElement].description}</p>
	</div>
{:else}
	<p class="not-found">No achievements found.</p>
{/if}

<style>
	p{
		font-size: 1.5rem;
		color: black;
	}

	.achievement{
		display: flex;
		flex-direction: column;
		align-items: center;
		background: aliceblue;
		border-radius: 5px;
		transition: all .4s ease;
		width: fit-content;
		box-shadow: 10px 10px rgba(0,0,0,.25);
	}

	.achievement:hover{
  		box-shadow: 20px 20px rgba(0,0,0,.25);
	}

	.not-found{
		background-color: #fff;
	}

</style>
