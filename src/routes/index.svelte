<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'home', path: '/' },
			{ type: 'roadmap', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const homepageDataEN = await client.getSingle('home', {
			lang: 'en-us'
		});
		const homepageDataES = await client.getSingle('home', {
			lang: 'es-co'
		});
		const roadmapDataEN = await client.getSingle('roadmap', {
			lang: 'en-us'
		});
		const roadmapDataES = await client.getSingle('roadmap', {
			lang: 'es-co'
		});

		// console.log(roadmapDataEN.data);

		return {
			props: {
				homepageDataEN: homepageDataEN.data.body,
				roadmapDataEN: roadmapDataEN.data,
				homepageDataES: homepageDataES.data.body,
				roadmapDataES: roadmapDataES.data
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/homepage/hero-section.svelte';
	import BrandsSection from '../sections/homepage/brands.svelte';
	import Section1 from '../sections/homepage/section-1.svelte';
	import Section2 from '../sections/homepage/section-2.svelte';
	import Section3 from '../sections/homepage/section-3.svelte';
	import Section4 from '../sections/homepage/section-4.svelte';
	import RoadMapSection from '../sections/homepage/roadmap.svelte';
	import Section5 from '../sections/homepage/section-5.svelte';
	import Section6 from '../sections/homepage/section-6.svelte';

	//PROPS
	export let homepageDataEN, homepageDataES;
	export let roadmapDataEN, roadmapDataES;
</script>

<svelte:head>
	<title>{homepageDataEN[0].primary.title[0].text}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<HeroSection data={homepageDataEN[0]} />
	<BrandsSection data={homepageDataEN[1]} />
	<Section1 data={homepageDataEN[2]} />
	<Section2 data={homepageDataEN[3]} />
	<Section3 data={homepageDataEN[4]} />
	<Section4 data={homepageDataEN[5]} />
	<RoadMapSection data={roadmapDataEN} />
	<Section5 data={homepageDataEN[6]} />
	<Section6 data={homepageDataEN[7]} />
{/if}

{#if $locale === 'es-co'}
	<HeroSection data={homepageDataES[0]} />
	<BrandsSection data={homepageDataES[1]} />
	<Section1 data={homepageDataES[2]} />
	<Section2 data={homepageDataES[3]} />
	<Section3 data={homepageDataES[4]} />
	<Section4 data={homepageDataES[5]} />
	<RoadMapSection data={roadmapDataES} />
	<Section5 data={homepageDataES[6]} />
	<Section6 data={homepageDataES[7]} />
{/if}
