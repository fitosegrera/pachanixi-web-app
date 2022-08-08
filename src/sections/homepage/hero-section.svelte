<script>
	//LIBS
	import { onMount } from 'svelte';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../stores/main';

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
	let orbRightImgSeqWidth = 240;
	let orbRightImgSeqHeight = 240;

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
			orbRightImgSeqWidth = 240;
			orbRightImgSeqHeight = 240;
		}
	};

	$: $is_mobile_view, evalutateMobileView();
</script>

<svelte:window bind:innerWidth={$window_width} />

<div id="wrapper" class="w-auto h-auto bg-primary-dark">
	<div id="img-wrapper" class="w-full h-full" />
	<Main>
		<div class="w-full h-auto">
			<div class="mt-160">
				<img
					src={data.primary.background_image.url}
					alt={data.primary.background_image.alt}
					class="w-full"
				/>
			</div>
			<div
				class="flex w-full mt-32 items-center justify-center text-center text-primary-light font-bold xl:text-p1 md:text-p2 sm:text-p3"
			>
				<h2>{data.primary.paragraph[0].text}</h2>
			</div>
			<div class="flex w-auto justify-center mt-88">
				<PrimaryButton
					label={data.primary.button_label}
					url={data.primary.button_url}
					target={'__blank'}
				/>
			</div>

			<div class="flex w-auto h-auto justify-center mt-64">
				<ImageSequence
					totalFrames={240}
					name={'hero-nft'}
					url={'/assets/vids/nft-1-seq/'}
					imgWidth={nftImgSeqWidth}
					imgHeight={nftImgSeqHeight}
				/>
			</div>
			<div id="orb-right-wrapper" class="w-auto h-auto">
				<ImageSequence
					totalFrames={240}
					name={'hero-orb-right'}
					url={'/assets/vids/orbitante-2-seq/'}
					imgWidth={orbRightImgSeqWidth}
					imgHeight={orbRightImgSeqHeight}
				/>
			</div>
			<div id="orb-left-wrapper" class="w-auto h-auto">
				<ImageSequence
					totalFrames={240}
					name={'hero-orb-left'}
					url={'/assets/vids/orbitante-3-seq/'}
					imgWidth={orbLeftImgSeqWidth}
					imgHeight={orbLeftImgSeqHeight}
				/>
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
		background-image: url('/assets/imgs/bg-texture.png');
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

	#orb-right-wrapper {
		position: absolute;
		right: 140px;
		top: 600px;
	}
	#orb-left-wrapper {
		position: absolute;
		left: 120px;
		top: 800px;
	}
</style>
