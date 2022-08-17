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
		const mintDataEN = await client.getSingle('mint', {
			lang: 'en-us'
		});

		const mintDataES = await client.getSingle('mint', {
			lang: 'es-co'
		});

		//console.log(mintData.data);

		return {
			props: {
				mintDataEN: mintDataEN.data.body,
				mintDataES: mintDataES.data.body,
				title: mintDataEN.data.page_title[0].text
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/mint/hero-section.svelte';
	import Section_1 from '../sections/mint/section-1.svelte';

	//PROPS
	export let mintDataEN, mintDataES, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<HeroSection data={mintDataEN[0]} />
	<Section_1 data={mintDataEN[1]} />
{/if}

{#if $locale === 'es-co'}
	<HeroSection data={mintDataES[0]} />
	<Section_1 data={mintDataES[1]} />
{/if}
