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
	<div class="outer-circle">
		<img src={image} alt="" />
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</div>

<style>
	p {
		font-size: 2rem;
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
	}

	img {
		height: 180px;
		width: 180px;
		position: absolute;
		background: black;
		top: 10px;
		left: 10px;
		border-radius: 50%;
		z-index: 9;
	}

	.outer-circle {
	position: relative;
	height: 200px;
	width: 200px;
	background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
	border-radius: 50%;
	animation: rotate 1.5s linear infinite;
	}

	.outer-circle span {
	position: absolute;
	height: 200px;
	width: 200px;
	background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
	border-radius: 50%;
	}

	span:nth-child(1) {
	filter: blur(5px);
	}

	span:nth-child(2) {
	filter: blur(10px);
	}

	span:nth-child(3) {
	filter: blur(25px);
	}

	span:nth-child(4) {
	filter: blur(150px);
	}

	
</style>
