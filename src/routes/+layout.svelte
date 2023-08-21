<script>
	import Modal from '../components/modal.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	

	inject({ mode: dev ? 'development' : 'production' });
	let showModal = false;

</script>

<nav>
	<h1>AchievementPicker</h1>

	<button on:click={() => (showModal = true)}>   </button>
	<Modal bind:showModal>
		<h2 slot="header">
			How to use this site
		</h2>
	
		<ol class="definition-list">
			<li>Enter the person's custom tag, such as "wlilliam" or a steam64ID and click the search button.</li>
			<li>Choose the game from which you want to retrieve an achievement. Please note that this site is unable to access achievements from <strong>private profiles</strong>.</li>
		</ol>
	</Modal>

</nav>

<section class="content">
    <slot></slot>
</section>

<style>

	:global(html, body){
		padding: 0;
		height: 100%;
	}

    :global(body){
		margin: 0;
		background: #0F2027;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

	:global(p){
		color: aliceblue;
	}

	nav {
		grid-area: top;
		display: flex;
		justify-content: space-between;
		padding-left: 27px;
		background-color: #171a21;
	}	

	h1 {
		font-size: 20px;
		color: aliceblue;
		font-family: 'Inter', sans-serif;
	}

	button {
		background-color: #171a21;
		color: aliceblue;
		border: none;
	}

		/* Media query for screen width 440px or smaller */
		@media (max-width: 440px) {
			nav{
				justify-content: center;
			}

			h1{
				font-size: 15px;
				padding-right: 5px;
			}
		}
</style>