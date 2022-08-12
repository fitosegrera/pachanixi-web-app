<script>
	//LIBS
	import { onMount } from 'svelte';
	import * as prismicH from '@prismicio/helpers';

	//STORES
	import {
		window_width,
		is_mobile_view,
		break_point,
		img_seq_total_frames
	} from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/light/lg/primary.svelte';
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	let nftImgSeqWidth = 1000;
	let nftImgSeqHeight = 723;
	let orbLeftImgSeqWidth = 240;
	let orbLeftImgSeqHeight = 240;
	let orbRightImgSeqWidth = 180;
	let orbRightImgSeqHeight = 180;

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	const evaluateWindowWidth = () => {
		if ($window_width < 820) {
			nftImgSeqWidth = 480;
			nftImgSeqHeight = 347;
			orbLeftImgSeqWidth = 120;
			orbLeftImgSeqHeight = 120;
			orbRightImgSeqWidth = 72;
			orbRightImgSeqHeight = 72;
		} else if ($window_width >= 820 && $window_width < 1100) {
			nftImgSeqWidth = 720;
			nftImgSeqHeight = 521;
			orbLeftImgSeqWidth = 180;
			orbLeftImgSeqHeight = 180;
			orbRightImgSeqWidth = 120;
			orbRightImgSeqHeight = 120;
		} else {
			nftImgSeqWidth = 1000;
			nftImgSeqHeight = 723;
			orbLeftImgSeqWidth = 240;
			orbLeftImgSeqHeight = 240;
			orbRightImgSeqWidth = 180;
			orbRightImgSeqHeight = 180;
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
			<div
				id="nft-wrapper"
				class="xl:-right-320 h-full w-auto sm:-right-224 sm:-top-32 md:-right-124 md:-top-264 lg:-top-368 lg:-right-296 xl:-top-160 2xl:-right-196">
				<!-- <ImageSequence
					totalFrames={$img_seq_total_frames}
					name={'section-2-nft'}
					url={'/assets/vids/nft-2-seq/'}
					imgWidth={nftImgSeqWidth}
					imgHeight={nftImgSeqHeight} /> -->
				<video width="100%" autoplay loop muted>
					<source src="/assets/vids/alpha/nft-2-alpha.webm" type="video/webm" />
				</video>
			</div>
		</div>
		<div
			class="h-auto w-full pt-32 text-justify font-medium sm:text-p3 md:text-p2 lg:text-p1">
			<!-- <p class="">{data.primary.paragraph[0].text}</p> -->
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
			<!-- <ImageSequence
				totalFrames={$img_seq_total_frames}
				name={'section-2-orb-left'}
				url={'/assets/vids/orbitante-2-seq/'}
				imgWidth={orbLeftImgSeqWidth}
				imgHeight={orbLeftImgSeqHeight} /> -->
				<video width="50%" autoplay loop muted>
					<source src="/assets/vids/alpha/orbitante-2-alpha.webm" type="video/webm" />
				</video>
		</div>
		<div
			id="orb-right-wrapper"
			class="lg:bottom-32 h-auto w-auto sm:bottom-24 sm:-right-148 lg:right-210">
			<!-- <ImageSequence
				totalFrames={$img_seq_total_frames}
				name={'section-2-orb-right'}
				url={'/assets/vids/orbitante-3-seq/'}
				imgWidth={orbRightImgSeqWidth}
				imgHeight={orbRightImgSeqHeight} /> -->
				<video width="50%" autoplay loop muted>
					<source src="/assets/vids/alpha/orbitante-3-alpha.webm" type="video/webm" />
				</video>
		</div>
	</Main>
</div>

<style>
	#nft-wrapper {
		position: absolute;
		/* right: -50px;
		top: -180px; */
		pointer-events: none;
		/* mix-blend-mode: normal; */
		z-index: 3;
	}

	video {
		background-color: transparent;
	}

	#orb-right-wrapper {
		position: absolute;
		/* right: 200px; */
		/* top: 800px; */
		rotate: 60deg;
		pointer-events: none;
		z-index: 12;
	}

	#orb-left-wrapper {
		position: absolute;
		/* left: 200px;
		top: 960px; */
		rotate: 60deg;
		pointer-events: none;
		z-index: 12;
	}
</style>
