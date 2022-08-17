<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'cosmovision', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const cosmovisionDataEn = await client.getSingle('cosmovision', {
			lang: 'en-us'
		});

		const cosmovisionDataEs = await client.getSingle('cosmovision', {
			lang: 'es-co'
		});

		//console.log(cosmovisionDataEn, cosmovisionDataEs);

		return {
			props: {
				cosmovisionDataEn: cosmovisionDataEn.data.body,
				cosmovisionDataEs: cosmovisionDataEs.data.body,
				title: cosmovisionDataEn.data.page_title[0].text
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/cosmovision/hero-section.svelte';
	import Section1 from '../sections/cosmovision/section-1.svelte';
	import Section2 from '../sections/cosmovision/section-2.svelte';

	//PROPS
	export let cosmovisionDataEn, cosmovisionDataEs, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<HeroSection data={cosmovisionDataEn[0]} />
	<Section1 data={cosmovisionDataEn[1]} />
	<Section2 data={cosmovisionDataEn[2]} />
{/if}

{#if $locale === 'es-co'}
	<HeroSection data={cosmovisionDataEs[0]} />
	<Section1 data={cosmovisionDataEs[1]} />
	<Section2 data={cosmovisionDataEs[2]} />
{/if}
