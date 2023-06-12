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
	p {
		font-size: 1.5rem;
		color: black;
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}

	.achievement {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: aliceblue;
		border-radius: 5px;
		transition: all 0.4s ease;
		width: fit-content;
		box-shadow: 5px 5px rgba(0, 0, 0, 0.1);
	}

	.achievement:hover {
		box-shadow: 8px 8px rgba(0, 0, 0, 0.1);
	}

	.not-found {
		background-color: #fff;
	}
</style>
