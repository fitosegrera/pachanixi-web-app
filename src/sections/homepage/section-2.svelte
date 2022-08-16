<script>
	//LIBS
	import { onMount } from 'svelte';
	import * as prismicH from '@prismicio/helpers';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/light/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	let nftWidth = '100%';
	let orbSize = '40%';

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	const evaluateWindowWidth = () => {
		if ($window_width <= 640) {
			nftWidth = '90%';
		} else if ($window_width <= 960) {
			nftWidth = '70%';
		} else if ($window_width <= 1280) {
			nftWidth = '80%';
		} else {
			nftWidth = '70%';
		}

		if ($is_mobile_view === true) {
			orbSize = '20%';
		} else {
			orbSize = '40%';
		}
	};

	$: $window_width, evaluateWindowWidth();

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-dark-variant">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-dark pb-32">${children}</p>`;
		}
	};
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="relative h-auto w-auto bg-primary-main pt-32 sm:pb-72 md:pb-124">
	<Main>
		<div class="flex">
			<div>
				<div class="flex h-auto w-full items-center justify-start">
					<Divider
						name="homepage-section-2-divider"
						w={'50'}
						h={'32'}
						pixCol={'#02232B'} />
				</div>
				<div
					class="items-center font-bold text-primary-dark sm:space-y-16 sm:text-p1 md:text-h5 lg:flex lg:space-x-32">
					<h5>
						{data.primary.title[0].text}
					</h5>
					<p class="font-bold sm:text-p3 md:text-p2">
						{data.primary.subtitle_1[0].text}
					</p>
				</div>
				<div
					class="h-auto w-auto pt-32 font-bold sm:text-h6 md:text-h3 lg:text-h1">
					<h1 class="">
						{data.primary.subtitle_2[0].text}
					</h1>
					<h1 class="">
						{data.primary.subtitle_2[1].text}
					</h1>
				</div>
			</div>
			<div id="nft-wrapper" class="-h-auto w-auto">
				<video
					class="sm:top-96 sm:-right-96 md:top-112 md:-right-124 lg:-right-264 lg:-top-72 xl:-top-160 xl:-right-240"
					width={nftWidth}
					autoplay
					loop
					muted>
					<source src="/assets/vids/alpha/nft-2-alpha.webm" type="video/webm" />
				</video>
			</div>
		</div>
		<div
			class="h-auto w-full pt-32 text-justify font-medium sm:text-p3 md:text-p2 lg:text-p1">
			<p>
				{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
			</p>
		</div>
		<div class="flex w-auto justify-center sm:mt-32 md:mt-72">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={''} />
		</div>
		<div
			id="orb-left-wrapper"
			class="h-auto w-auto sm:-bottom-24 sm:-left-96 lg:top-960 lg:left-72 xl:left-210">
			<video width={orbSize} autoplay loop muted>
				<source
					src="/assets/vids/alpha/orbitante-2-alpha.webm"
					type="video/webm" />
			</video>
		</div>
		<div
			id="orb-right-wrapper"
			class="h-auto w-auto sm:bottom-24 sm:-right-148 lg:bottom-32 lg:right-210">
			<video width={orbSize} autoplay loop muted>
				<source
					src="/assets/vids/alpha/orbitante-3-alpha.webm"
					type="video/webm" />
			</video>
		</div>
	</Main>
</div>

<style>
	#nft-wrapper video {
		position: absolute;
		pointer-events: none;
		z-index: 3;
	}

	video {
		background-color: transparent;
	}

	#orb-right-wrapper {
		position: absolute;
		rotate: 60deg;
		pointer-events: none;
		z-index: 12;
	}

	#orb-left-wrapper {
		position: absolute;
		rotate: 60deg;
		pointer-events: none;
		z-index: 12;
	}
</style>
