<script>

</script>

<div class="wrapper">
	<nav>
		<h1>AchievementPicker</h1>
	</nav>

	<section class="left" />

	<section class="right" />

    <section class="content">
        <slot></slot>
    </section>
</div>

<style>
    :global(body){
        background-color: black;
        overflow: hidden;
		margin: 0;
    }

	:global(p){
		color: white;
	}

    .wrapper {
		min-height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
	}

	nav {
		grid-area: top;
		display: flex;
		justify-content: center;
		background-image: radial-gradient( circle 850px at 50% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2%);
		border-bottom: 3px solid rgba(9,29,85,1);
		border-radius: 80%;
	}	

	h1 {
		color: white;
	}
</style>