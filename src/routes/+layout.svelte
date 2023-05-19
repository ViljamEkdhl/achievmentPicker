<script>

</script>

<nav>
	<h1>AchievementPicker</h1>
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
		height: 100%;
		background-image: url("../assets/background.png");
		background-size: cover;
		background-repeat: no-repeat;
    }

	:global(p){
		color: aliceblue;
	}

	nav {
		grid-area: top;
		display: flex;
		padding-left: 27px;
		background-color: #171a21;
	}	

	h1 {
		font-size: 20px;
		color: aliceblue;
		font-family: 'Inter', sans-serif;
	}

</style>