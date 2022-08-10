<script>
	//COMPONENTS
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';

	let nftImgSeqWidth = 800;
	let nftImgSeqHeight = 579;
</script>

<div id="wrapper" class="mt-64 h-full w-full">
	<div class="grid h-520 w-full grid-rows-2">
		<div class="h-full w-full bg-primary-dark" />
		<div class="h-full w-full bg-primary-dark" />
	</div>
	<div id="nft-wrapper" class="">
		<ImageSequence
			totalFrames={240}
			name={'cosmovision-section-splitter-nft'}
			url={'/assets/vids/nft-1-seq/'}
			imgWidth={nftImgSeqWidth}
			imgHeight={nftImgSeqHeight} />
	</div>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: -1;
	}

	#nft-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}
</style>
