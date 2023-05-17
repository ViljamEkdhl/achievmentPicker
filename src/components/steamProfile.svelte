<script>
	/**
	 * @type {any}
	 */
	export let image;
	/**
	 * @type {String}
	 */
	export let name;
</script>

<div class="steamProfile">
	<p>{name}</p>
	<img src={image} alt="" />
</div>

<style>
	p {
		font-size: 2rem;
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
	}

	img {
		border-radius: 20%;
	}
</style>
