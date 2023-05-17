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
		font-size: 2rem;
		color: black;
	}
	.achievement{
		background-color: #fff;
		width: 50rem;
	}

	.not-found{
		background-color: #fff;
	}

</style>
