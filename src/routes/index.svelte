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
			{ type: 'roadmap', path: '/' },
			{ type: 'faq', path: '/' }
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

		const faqDataEN = await client.getSingle('faq', {
			lang: 'en-us'
		});

		const faqDataES = await client.getSingle('faq', {
			lang: 'es-co'
		});

		console.log(faqDataEN.data.title[0].text);

		let tmpFaqDataEN = [];
		let tmpFaqDataES = [];

		await faqDataEN.data.faq_group.forEach((q, i) => {
			tmpFaqDataEN.push({ id: i, faq: q });
		});

		await faqDataES.data.faq_group.forEach((q, i) => {
			tmpFaqDataES.push({ id: i, faq: q });
		});

		let faqTitleEN = faqDataEN.data.title[0].text;
		let faqTitleES = faqDataES.data.title[0].text;

		//console.log(tmpFaqDataEN, tmpFaqDataES);

		return {
			props: {
				homepageDataEN: homepageDataEN.data.body,
				roadmapDataEN: roadmapDataEN.data,
				homepageDataES: homepageDataES.data.body,
				roadmapDataES: roadmapDataES.data,
				faqDataEN: tmpFaqDataEN,
				faqDataES: tmpFaqDataES,
				faqTitleEN: faqTitleEN,
				faqTitleES: faqTitleES
			}
		};
	}
</script>

<script>
	//STORES
	import { locale } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/homepage/hero-section.svelte';
	import BrandsSection from '../sections/homepage/brands-section.svelte';
	import Section1 from '../sections/homepage/section-1.svelte';
	import Section2 from '../sections/homepage/section-2.svelte';
	import Section3 from '../sections/homepage/section-3.svelte';
	import Section4 from '../sections/homepage/section-4.svelte';
	import RoadMapSection from '../sections/homepage/roadmap-section.svelte';
	import Section5 from '../sections/homepage/section-5.svelte';
	import FaqSection from '../sections/homepage/faq-section.svelte';
	import Section6 from '../sections/homepage/section-6.svelte';

	//PROPS
	export let homepageDataEN, homepageDataES;
	export let roadmapDataEN, roadmapDataES;
	export let faqDataEN, faqDataES;
	export let faqTitleEN, faqTitleES;
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
	<FaqSection data={faqDataEN} title={faqTitleEN} />
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
	<FaqSection data={faqDataES} title={faqTitleES} />
	<Section6 data={homepageDataES[7]} />
{/if}
