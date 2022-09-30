<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'navbar', path: '/' },
			{ type: 'footer', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });

		//const repository = await client.getRepository();

		const navBarDataEN = await client.getSingle('navbar', {
			lang: 'en-us'
		});

		const navBarDataES = await client.getSingle('navbar', {
			lang: 'es-co'
		});

		const footerDataEN = await client.getSingle('footer', {
			lang: 'en-us'
		});

		const footerDataES = await client.getSingle('footer', {
			lang: 'es-co'
		});

		return {
			props: {
				navBarDataEN: navBarDataEN.data,
				navBarDataES: navBarDataES.data,
				footerDataEN: footerDataEN.data,
				footerDataES: footerDataES.data
			}
		};
	}
</script>

<script>
	//STYLES
	import '../app.css';

	//STORES
	import { locale } from '../stores/main';

	//COMPONENTS
	import NavBar from '../components/navigation/navbarWithScroller.svelte';
	// import NavBar from '../components/navigation/navbar.svelte';
	import Footer from '../components/navigation/footer.svelte';

	//PROPS
	export let navBarDataEN, navBarDataES;
	export let footerDataEN, footerDataES;

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
	{#if $locale === 'en-us'}
		<NavBar navBarData={navBarDataEN} />
		<slot />
		<Footer footerData={footerDataEN} />
	{/if}
	{#if $locale === 'es-co'}
		<NavBar navBarData={navBarDataES} />
		<slot />
		<Footer footerData={footerDataES} />
	{/if}
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
