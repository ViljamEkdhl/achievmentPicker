<script>
	import GetSteamId from "../components/getSteamId.svelte";
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

</script>

<nav>
	<h1>AchievementPicker</h1>

	<GetSteamId/>
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

		/* Media query for screen width 520px or smaller */
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