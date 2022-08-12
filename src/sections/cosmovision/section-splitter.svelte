<script>
	//STORES
	import { img_seq_total_frames } from '../../stores/main';

	//COMPONENTS
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';

	let nftImgSeqWidth = 640;
	let nftImgSeqHeight = 462;
</script>

<div id="wrapper" class="mt-16 h-full w-full">
	<!-- <div class="grid h-520 w-full grid-rows-2">
		<div class="h-full w-full bg-primary-dark" />
		<div class="h-full w-full bg-primary-dark" />
	</div> -->
	<div id="nft-wrapper" class="flex justify-center">
		<!-- <ImageSequence
			totalFrames={$img_seq_total_frames}
			name={'cosmovision-section-splitter-nft'}
			url={'/assets/vids/nft-1-seq/'}
			imgWidth={nftImgSeqWidth}
			imgHeight={nftImgSeqHeight} /> -->
			<video width="65%" autoplay loop muted>
				<source src="/assets/vids/alpha/nft-1-alpha.webm" type="video/webm" />
			</video>
	</div>
</div>

<style>
	#wrapper {
		/* position: relative;
		z-index: -1; */
	}

	#nft-wrapper {
		/* position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1; */
	}
</style>
