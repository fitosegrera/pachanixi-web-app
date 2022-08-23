<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'whitepaper', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const whitepaperEN = await client.getSingle('whitepaper', {
			lang: 'en-us'
		});

		const whitepaperES = await client.getSingle('whitepaper', {
			lang: 'es-co'
		});

		console.log(whitepaperEN.data, whitepaperES.data);

		return {
			props: {
				whitepaperEN: whitepaperEN.data,
				whitepaperES: whitepaperES.data,
				title: whitepaperEN.data.page_title[0].text
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//COMPONENTS
	import HeroSection from '../sections/whitepaper/hero-section.svelte';

	//PROPS
	export let whitepaperEN, whitepaperES, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<HeroSection data={whitepaperEN} {title} />
{/if}

{#if $locale === 'es-co'}
	<HeroSection data={whitepaperES} {title} />
{/if}
