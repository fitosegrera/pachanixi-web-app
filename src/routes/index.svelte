<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'countdown', path: '/' },
			{ type: 'prelaunch', path: '/' },
			{ type: 'home', path: '/' },
			{ type: 'roadmap', path: '/' },
			{ type: 'faq', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });

		const prelaunchDataEN = await client.getSingle('prelaunch', {
			lang: 'en-us'
		});
		const prelaunchDataES = await client.getSingle('prelaunch', {
			lang: 'es-co'
		});
		const countdownDataEN = await client.getSingle('countdown', {
			lang: 'en-us'
		});
		const countdownDataES = await client.getSingle('countdown', {
			lang: 'es-co'
		});
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

		console.log(homepageDataEN);

		return {
			props: {
				prelaunchDataEN: prelaunchDataEN.data,
				prelaunchDataES: prelaunchDataES.data,
				countdownDataEN: countdownDataEN.data,
				countdownDataES: countdownDataES.data,
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
	import Prelaunch from '../sections/homepage/prelaunch.svelte';
	import HeroSection from '../sections/homepage/hero-section.svelte';
	import CountdownSection from '../sections/homepage/countdown-section.svelte';
	import BrandsSection from '../sections/homepage/brands-section.svelte';
	import Section1 from '../sections/homepage/section-1.svelte';
	import Section2 from '../sections/homepage/section-2.svelte';
	import TiersSection from '../sections/homepage/tiers-section.svelte';
	import Section3 from '../sections/homepage/section-3.svelte';
	import Section4 from '../sections/homepage/section-4.svelte';
	import RoadMapSection from '../sections/homepage/roadmap-section.svelte';
	import Section5 from '../sections/homepage/section-5.svelte';
	import FaqSection from '../sections/homepage/faq-section.svelte';
	import Section6 from '../sections/homepage/section-6.svelte';

	//PROPS
	export let prelaunchDataEN, prelaunchDataES;
	export let countdownDataEN, countdownDataES;
	export let homepageDataEN, homepageDataES;
	export let roadmapDataEN, roadmapDataES;
	export let faqDataEN, faqDataES;
	export let faqTitleEN, faqTitleES;
</script>

<svelte:head>
	<title>{homepageDataEN[0].primary.title[0].text}</title>
</svelte:head>

{#if $locale === 'en-us'}
	<Prelaunch data={prelaunchDataEN} />
	<CountdownSection data={countdownDataEN} />
	<!-- <HeroSection data={homepageDataEN[0]} />-->
	<BrandsSection data={homepageDataEN[1]} />
	<Section1 data={homepageDataEN[2]} highlightData={homepageDataEN[3]} />
	<!-- <Section2 data={homepageDataEN[3]} />
	<TiersSection data={homepageDataEN[4]} /> -->
	<!-- <Section3 data={homepageDataEN[4]} />
	<Section4 data={homepageDataEN[5]} /> 
	<RoadMapSection data={roadmapDataEN} />-->
	<Section5 data={homepageDataEN[7]} />
	<!-- <FaqSection data={faqDataEN} title={faqTitleEN} />-->
	<Section6 data={homepageDataEN[8]} />
{/if}

{#if $locale === 'es-co'}
	<Prelaunch data={prelaunchDataES} />
	<CountdownSection data={countdownDataES} />
	<!-- <HeroSection data={homepageDataES[0]} /> -->
	<BrandsSection data={homepageDataES[1]} />
	<Section1 data={homepageDataES[2]} highlightData={homepageDataES[3]} />
	<!-- <Section2 data={homepageDataES[3]} />
	<TiersSection data={homepageDataES[4]} /> -->
	<!-- <Section3 data={homepageDataES[4]} />
	<Section4 data={homepageDataES[5]} />
	<RoadMapSection data={roadmapDataES} /> -->
	<Section5 data={homepageDataES[7]} />
	<!-- <FaqSection data={faqDataES} title={faqTitleES} /> -->
	<Section6 data={homepageDataES[8]} />
{/if}

<style>
	@keyframes -global-from-left {
		0% {
			transform: translateX(-10vw);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-from-right {
		0% {
			transform: translateX(10vw);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-from-bottom {
		0% {
			transform: translateY(10vw);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-in-elliptic-top-fwd {
		0% {
			transform: translateY(-600px) rotateX(-20deg) scale(0);
			transform-origin: 50% 100%;
			opacity: 0;
		}
		100% {
			transform: translateY(0) rotateX(0) scale(1);
			transform-origin: 50% 1200px;
			opacity: 1;
		}
	}

	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
