<script>
	//PROPS
	export let data;
</script>

<div
	class="bg-blur flex h-72 w-screen items-center justify-center bg-primary-dark-variant py-16 text-p2 font-bold text-primary-main">
	<p class="marquee">
		<span>{data}</span>
	</p>
	<p class="marquee marquee2">
		<span>{data}</span>
	</p>
</div>

<style>
	.marquee {
		margin: 0 auto;
		white-space: nowrap;
		overflow: hidden;
		position: absolute;
	}

	.marquee span {
		display: inline-block;
		padding-left: 100%;
		animation: marquee 20s linear infinite;
	}

	.marquee2 span {
		animation-delay: 10s;
	}

	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100%, 0);
		}
	}
</style>
