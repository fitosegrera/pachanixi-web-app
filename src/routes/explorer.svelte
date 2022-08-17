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

		const explorerDataEN = await client.getSingle('explorer', {
			lang: 'en-us'
		});

		const explorerDataES = await client.getSingle('explorer', {
			lang: 'es-co'
		});

		console.log(explorerDataEN.data.body);

		return {
			props: {
				explorerDataEN: explorerDataEN.data.body,
				explorerDataES: explorerDataES.data.body,
				title: explorerDataEN.data.page_title[0].text
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/explorer/hero-section.svelte';
	import Section1 from '../sections/explorer/section-1.svelte';
	import Section2 from '../sections/explorer/section-2.svelte';

	//PROPS
	export let explorerDataEN, explorerDataES, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<HeroSection data={explorerDataEN[0]} />
	<Section1 data={explorerDataEN[1]} />
	<Section2 data={explorerDataEN[2]} />
{/if}

{#if $locale === 'es-co'}
	<HeroSection data={explorerDataES[0]} />
	<Section1 data={explorerDataES[1]} />
	<Section2 data={explorerDataES[2]} />
{/if}
