<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'explorer', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const explorerData = await client.getSingle('explorer');

		console.log(explorerData.data);

		return {
			props: {
				explorerData: explorerData.data,
				title: explorerData.data.page_title[0].text
			}
		};
	}
</script>

<script>
	//SECTIONS
	import HeroSection from '../sections/explorer/hero-section.svelte';
	// import Section_1 from '../sections/mint/section-1.svelte';
	// import Section_2 from '../sections/mint/section-2.svelte';

	//PROPS
	export let explorerData, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<HeroSection data={explorerData} />
<!-- <Section_1 data={mintData[1]} />
<Section_2 /> -->
