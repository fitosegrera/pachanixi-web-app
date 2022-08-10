<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';

	//PORPS
	export let data;

	let nftImgSeqWidth = 720;
	let nftImgSeqHeight = 521;
</script>

<div id="wrapper" class="h-auto w-auto">
	<div id="img-wrapper" class="h-full w-full" />
	<div class="h-full w-full">
		<Main>
			<div
				class="mt-124 flex h-auto w-full flex-col items-center justify-center">
				<div
					class="-mb-24 h-auto w-auto text-primary-main sm:text-h3 md:text-h2">
					<Icon icon={data.primary.icon_label} />
				</div>
			</div>
			<div
				class="w-auto text-center font-bold text-primary-main sm:text-h6 md:text-h5 lg:text-h3">
				<h3>{data.primary.hero_section_title[0].text}</h3>
			</div>
			<div class="h-auto w-full pt-4">
				<p
					class="text-center font-bold text-primary-light sm:text-p3 lg:text-p2">
					{data.primary.hero_section_subtitle[0].text.toUpperCase()}
				</p>
			</div>
			<div class="mt-72 flex h-auto w-auto justify-center">
				<ImageSequence
					totalFrames={240}
					name={'hero-nft'}
					url={'/assets/vids/nft-3-seq/'}
					imgWidth={nftImgSeqWidth}
					imgHeight={nftImgSeqHeight} />
			</div>
		</Main>
	</div>
</div>

<style>
	* {
		overflow: hidden;
	}

	#wrapper {
		position: relative;
	}

	#img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('/assets/imgs/bg-grabado-2.jpg');
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
		mask-image: linear-gradient(to bottom, #02232b66, #02232b00);
		z-index: -10;
	}
</style>
