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
        background-color: white;
        overflow: hidden;
    }

    .wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 100px 100px;
		grid-template-areas:
			'left top right'
			'left centre right'
            'left centre right';
		min-height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
	}

	nav {
		grid-area: top;
		display: flex;
		justify-content: center;
		background-color: darkgray;
	}

	h1 {
		color: black;
	}

	.left {
		grid-area: left;
		background-color: darkgray;
	}

	.right {
		grid-area: right;
		background-color: darkgray;
	}
</style>