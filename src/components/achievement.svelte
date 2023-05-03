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
	<div>
		<p>{input[randomElement].title}</p>
		<p>{input[randomElement].description}</p>
	</div>
{:else}
	<p>No achievements found.</p>
{/if}

<style>
</style>
