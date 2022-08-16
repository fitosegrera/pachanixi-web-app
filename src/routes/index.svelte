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
		const homepageData = await client.getSingle('home');
		const roadmapData = await client.getSingle('roadmap');

		// console.log(roadmapData.data);

		return {
			props: {
				homepageData: homepageData.data.body,
				roadmapData: roadmapData.data
			}
		};
	}
</script>

<script>
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

	//COMPONENTS
	//import AssetsLoader from '../components/information/assets-loader.svelte';

	//PROPS
	export let homepageData, roadmapData;
</script>

<svelte:head>
	<title>{homepageData[0].primary.title[0].text}</title>
</svelte:head>

<!-- <AssetsLoader totalAssets={9} /> -->
<HeroSection data={homepageData[0]} />
<BrandsSection data={homepageData[1]} />
<Section1 data={homepageData[2]} />
<Section2 data={homepageData[3]} />
<Section3 data={homepageData[4]} />
<Section4 data={homepageData[5]} />
<RoadMapSection data={roadmapData} />
<Section5 data={homepageData[6]} />
<Section6 data={homepageData[7]} />
