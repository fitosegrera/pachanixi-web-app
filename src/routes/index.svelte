<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'home', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const homepageData = await client.getSingle('home');

		//console.log(homepageData.data);

		return {
			props: {
				homepageData: homepageData.data.body
			}
		};
	}
</script>

<script>
	//LIBS
	import { img_seq_loading } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/homepage/hero-section.svelte';
	import Section1 from '../sections/homepage/section-1.svelte';
	import Section2 from '../sections/homepage/section-2.svelte';
	import Section3 from '../sections/homepage/section-3.svelte';
	import Section4 from '../sections/homepage/section-4.svelte';
	import Section5 from '../sections/homepage/section-5.svelte';
	import Section6 from '../sections/homepage/section-6.svelte';

	//COMPONENTS
	import PageLoader from '../components/information/page-loader.svelte';

	//PROPS
	export let homepageData;
</script>

<svelte:head>
	<title>{homepageData[0].primary.title[0].text}</title>
</svelte:head>

{#if $img_seq_loading < 9}
	<div
		id="asset-loader"
		class="flex items-center justify-center bg-primary-dark-alpha-variant w-full h-full"
	>
		<div
			class="w-auto px-32 py-24 h-auto bg-primary-dark opacity-90 border-primary-main border-4 rounded-lg"
		>
			<p class="text-p2 font-bold text-primary-main text-center">
				CARGANDO: {$img_seq_loading} / 10
			</p>
			<p class="text-p3 font-medium text-primary-main text-center pb-4">ESPERE UN MOMENTO...</p>
			<PageLoader
				w={320}
				h={16}
				foreground={'#BDFF00'}
				background={'#02232B'}
				cols={60}
				rows={20}
				threshold={0.96}
			/>
		</div>
	</div>
{/if}

<HeroSection data={homepageData[0]} />
<Section1 data={homepageData[1]} />
<Section2 data={homepageData[2]} />
<Section3 data={homepageData[3]} />
<Section4 data={homepageData[4]} />
<Section5 data={homepageData[5]} />
<Section6 data={homepageData[6]} />

<style>
	#asset-loader {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		/* opacity: 0.9; */
	}
</style>
