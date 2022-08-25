<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'plant-with-us', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const plantDataEN = await client.getSingle('plant-with-us', {
			lang: 'en-us'
		});

		const plantDataES = await client.getSingle('plant-with-us', {
			lang: 'es-co'
		});

		//console.log(plantDataEN.data);

		return {
			props: {
				plantDataEN: plantDataEN.data.body,
				plantDataES: plantDataES.data.body,
				title: plantDataEN.data.page_title[0].text
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/plant-with-us/hero-section.svelte';
	//import Section_1 from '../sections/plant-with-us/section-1.svelte';

	//PROPS
	export let plantDataEN, plantDataES, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<HeroSection data={plantDataEN[0]} />
	<!-- <Section_1 data={plantDataEN[1]} /> -->
{/if}

{#if $locale === 'es-co'}
	<HeroSection data={plantDataES[0]} />
	<!-- <Section_1 data={plantDataES[1]} /> -->
{/if}
