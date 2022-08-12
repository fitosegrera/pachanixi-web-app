<script>
	//LIBS
	import { onMount } from 'svelte';

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
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';

	//PORPS
	export let data;

	let nftImgSeqWidth = 940;
	let nftImgSeqHeight = 680;
	let orbLeftImgSeqWidth = 200;
	let orbLeftImgSeqHeight = 200;
	let orbRightImgSeqWidth = 200;
	let orbRightImgSeqHeight = 200;

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	const evalutateMobileView = () => {
		if ($is_mobile_view === true) {
			nftImgSeqWidth = 640;
			nftImgSeqHeight = 463;
			orbLeftImgSeqWidth = 80;
			orbLeftImgSeqHeight = 80;
			orbRightImgSeqWidth = 120;
			orbRightImgSeqHeight = 120;
		} else {
			nftImgSeqWidth = 940;
			nftImgSeqHeight = 680;
			orbLeftImgSeqWidth = 200;
			orbLeftImgSeqHeight = 200;
			orbRightImgSeqWidth = 200;
			orbRightImgSeqHeight = 200;
		}
	};

	$: $is_mobile_view, evalutateMobileView();
</script>

<svelte:window bind:innerWidth={$window_width} />

<div id="wrapper" class="h-auto w-auto bg-primary-dark">
	<div id="img-wrapper" class="h-full w-full" />
	<Main>
		<div class="h-auto w-full">
			<div class="mt-160">
				<img
					src={data.primary.background_image.url}
					alt={data.primary.background_image.alt}
					class="w-full" />
			</div>
			<div
				class="mt-32 flex w-full items-center justify-center text-center font-bold text-primary-light sm:text-p3 md:text-p2 xl:text-p1">
				<h2>{data.primary.paragraph[0].text}</h2>
			</div>
			<div class="mt-88 flex w-auto justify-center">
				<PrimaryButton
					label={data.primary.button_label}
					url={data.primary.button_url}
					target={'__blank'} />
			</div>

			<div class="mt-96 flex h-auto w-auto justify-center">
				<!-- <ImageSequence
					totalFrames={$img_seq_total_frames}
					name={'hero-nft'}
					url={'/assets/vids/nft-1-seq/'}
					imgWidth={nftImgSeqWidth}
					imgHeight={nftImgSeqHeight} /> -->

				<video width="50%" autoplay loop muted>
					<source src="/assets/vids/alpha/nft-4-alpha.webm" type="video/webm" />
				</video>
			</div>
			<div
				id="orb-right-wrapper"
				class="top-600 h-auto w-auto sm:right-32 md:-right-224 lg:-right-124">
				<!-- <ImageSequence
					totalFrames={$img_seq_total_frames}
					name={'hero-orb-right'}
					url={'/assets/vids/orbitante-2-seq/'}
					imgWidth={orbRightImgSeqWidth}
					imgHeight={orbRightImgSeqHeight} /> -->
					<video width="40%" autoplay loop muted>
						<source src="/assets/vids/alpha/orbitante-2-alpha.webm" type="video/webm" />
					</video>
			</div>
			<div
				id="orb-left-wrapper"
				class="h-auto w-auto sm:left-24 sm:top-920 md:left-72 lg:left-124 lg:top-800">
				<!-- <ImageSequence
					totalFrames={$img_seq_total_frames}
					name={'hero-orb-left'}
					url={'/assets/vids/orbitante-3-seq/'}
					imgWidth={orbLeftImgSeqWidth}
					imgHeight={orbLeftImgSeqHeight} /> -->
					<video width="40%" autoplay loop muted>
						<source src="/assets/vids/alpha/orbitante-3-alpha.webm" type="video/webm" />
					</video>
			</div>
		</div>
	</Main>
</div>

<style>
	* {
		overflow: hidden;
	}

	#wrapper {
		position: relative;
		z-index: 10;
	}

	#img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('/assets/imgs/bg-grabado-1.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#02232b55),
			to(#02232b00)
		);
		mask-image: linear-gradient(to bottom, #02232b55, #02232b00);
		z-index: -10;
	}

	video {
		background-color: transparent;
	}

	#orb-right-wrapper {
		position: absolute;
		/* right: 140px;
		top: 600px; */
	}
	#orb-left-wrapper {
		position: absolute;
		/* left: 120px;
		top: 800px; */
	}
</style>
