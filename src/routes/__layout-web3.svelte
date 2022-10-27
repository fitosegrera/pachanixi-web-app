<script>
	//STYLES
	import '../app.css';

	if (typeof window !== 'undefined' && window) {
		window.dataLayer = window.dataLayer || [];
		const gtag = () => {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());

		gtag('config', 'G-YG86NHKEBX');
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"
		rel="stylesheet" />
	<script async src="https://www.googletagmanager.com/gtag/js"></script>
</svelte:head>

<div id="page-wrapper" class="h-auto w-auto">
	<slot />
</div>

<style>
	* {
		font-family: 'Chakra Petch', sans-serif;
		overflow-x: hidden;
	}

	#page-wrapper {
		max-width: 1920px;
		margin: auto;
	}
</style>
