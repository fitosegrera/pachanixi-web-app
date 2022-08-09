<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'mint', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const mintData = await client.getSingle('mint');

		//console.log(mintData.data);

		return {
			props: {
				mintData: mintData.data.body,
				title: mintData.data.title[0].text
			}
		};
	}
</script>

<script>
	//SECTIONS
	import HeroSection from '../sections/mint/hero-section.svelte';
	import Section_1 from '../sections/mint/section-1.svelte';
	import Section_2 from '../sections/mint/section-2.svelte';

	//PROPS
	export let mintData, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="h-full w-full">
	<HeroSection data={mintData[0]} />
	<Section_1 data={mintData[1]} />
	<Section_2 />
</div>

<style>
	div {
		position: relative;
		background-image: -webkit-linear-gradient(#000000, #02232b) !important;
		z-index: -100;
	}
</style>
