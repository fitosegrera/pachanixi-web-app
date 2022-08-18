<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'demo-experience', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const demoExperienceDataEN = await client.getSingle('demo-experience', {
			lang: 'en-us'
		});

		const demoExperienceDataES = await client.getSingle('demo-experience', {
			lang: 'es-co'
		});

		//console.log(demoExperienceDataEN.data.body);

		return {
			props: {
				demoExperienceDataEN: demoExperienceDataEN.data.body,
				demoExperienceDataES: demoExperienceDataES.data.body,
				title: demoExperienceDataEN.data.title[0].text
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/demo-experience/hero-section.svelte';

	//PROPS
	export let demoExperienceDataEN, demoExperienceDataES, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<HeroSection data={demoExperienceDataEN[0]} />
{/if}

{#if $locale === 'es-co'}
	<HeroSection data={demoExperienceDataES[0]} />
{/if}
