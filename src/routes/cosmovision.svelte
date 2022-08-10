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
		const cosmovisionData = await client.getSingle('cosmovision');

		//console.log(cosmovisionData.data.body);

		return {
			props: {
				cosmovisionData: cosmovisionData.data.body,
				title: cosmovisionData.data.page_title[0].text
			}
		};
	}
</script>

<script>
	//SECTIONS
	import HeroSection from '../sections/cosmovision/hero-section.svelte';
	import Section1 from '../sections/cosmovision/section-1.svelte';
	import SectionSplitter from '../sections/cosmovision/section-splitter.svelte';
	import Section2 from '../sections/cosmovision/section-2.svelte';

	//PROPS
	export let cosmovisionData, title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<HeroSection data={cosmovisionData[0]} />
<Section1 data={cosmovisionData[1]} />
<SectionSplitter />
<Section2 data={cosmovisionData[2]} />
