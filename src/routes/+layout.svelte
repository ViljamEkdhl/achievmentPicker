<script>

</script>

<nav>
	<h1>AchievementPicker</h1>
</nav>

<div class="wrapper">
    <section class="content">
        <slot></slot>
    </section>
</div>

<style>

	:global(html, body){
		padding: 0;
		height: 100%;
	}

    :global(body){
		margin: 0;
		padding: 0;
		height: 100%;
		background-image: url("../assets/background.png");
		background-size: cover;
		background-repeat: no-repeat;
        overflow: hidden;
    }

	:global(p){
		color: aliceblue;
	}

    .wrapper {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	nav {
		grid-area: top;
		display: flex;
		padding-left: 27px;
		background-color: #171a21;
	}	

	h1 {
		font-size: 2.5rem;
		color: aliceblue;
		font-family: "Motiva Sans", Sans-serif;
	}

</style>