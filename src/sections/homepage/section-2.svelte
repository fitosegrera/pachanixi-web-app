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

	const evalutateMobileView = () => {
		if ($is_mobile_view === true) {
			nftImgSeqWidth = 640;
			nftImgSeqHeight = 463;
			orbLeftImgSeqWidth = 120;
			orbLeftImgSeqHeight = 120;
			orbRightImgSeqWidth = 72;
			orbRightImgSeqHeight = 72;
		} else {
			nftImgSeqWidth = 1000;
			nftImgSeqHeight = 723;
			orbLeftImgSeqWidth = 240;
			orbLeftImgSeqHeight = 240;
			orbRightImgSeqWidth = 180;
			orbRightImgSeqHeight = 180;
		}
	};

	$: $is_mobile_view, evalutateMobileView();

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

<div class="relative w-auto h-auto bg-primary-main pt-32 md:pb-124 sm:pb-72">
	<Main>
		<div class="flex">
			<div>
				<!-- <div class="flex w-full justify-start">
					<Divider name="section-2-divider" w={'420'} h={'32'} pixCol={'#02232B'} />
				</div> -->
				<div
					class="lg:flex lg:space-x-32 sm:space-y-16 md:text-h5 sm:text-h7 text-primary-dark font-bold items-center"
				>
					<h5>{data.primary.title[0].text}</h5>
					<p class="md:text-p2 sm:text-p3 font-bold">{data.primary.subtitle_1[0].text}</p>
				</div>
				<div class="w-auto h-auto pt-32 lg:text-h1 md:text-h4 sm:text-h6 font-bold">
					<h1 class="">{data.primary.subtitle_2[0].text}</h1>
					<h1 class="">{data.primary.subtitle_2[1].text}</h1>
				</div>
			</div>
			<div
				id="nft-wrapper"
				class="w-auto h-auto xl:-right-160 lg:-right-296 md:-right-296 sm:-right-220 lg:-top-196 sm:-top-48"
			>
				<ImageSequence
					totalFrames={240}
					name={'section-2-nft'}
					url={'/assets/vids/nft-2-seq/'}
					imgWidth={nftImgSeqWidth}
					imgHeight={nftImgSeqHeight}
				/>
			</div>
		</div>
		<div class="w-full h-auto pt-32 lg:text-p1 md:text-p2 sm:text-p3 font-medium">
			<!-- <p class="">{data.primary.paragraph[0].text}</p> -->
			<p>{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}</p>
		</div>
		<div class="flex w-auto justify-center md:mt-72 sm:mt-32">
			<PrimaryButton label={data.primary.button_label} url={data.primary.button_url} target={''} />
		</div>
		<div id="orb-left-wrapper" class="w-auto h-auto sm:bottom-96 sm:left-24 lg:top-960 lg:left-210">
			<ImageSequence
				totalFrames={240}
				name={'section-2-orb-left'}
				url={'/assets/vids/orbitante-2-seq/'}
				imgWidth={orbLeftImgSeqWidth}
				imgHeight={orbLeftImgSeqHeight}
			/>
		</div>
		<div
			id="orb-right-wrapper"
			class="w-auto h-auto sm:bottom-196 sm:right-24 lg:top-880 lg:right-210"
		>
			<ImageSequence
				totalFrames={240}
				name={'section-2-orb-right'}
				url={'/assets/vids/orbitante-3-seq/'}
				imgWidth={orbRightImgSeqWidth}
				imgHeight={orbRightImgSeqHeight}
			/>
		</div>
	</Main>
</div>

<style>
	#nft-wrapper {
		position: absolute;
		/* right: -50px;
		top: -180px; */
		pointer-events: none;
		mix-blend-mode: normal;
		z-index: 3;
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
