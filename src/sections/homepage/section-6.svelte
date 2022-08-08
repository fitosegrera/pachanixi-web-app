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
	import SocialButton from '../../components/button/light/lg/social.svelte';
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	let orbLeftImgSeqWidth = 200;
	let orbLeftImgSeqHeight = 200;
	let orbRightImgSeqWidth = 240;
	let orbRightImgSeqHeight = 240;

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	const evalutateMobileView = () => {
		if ($is_mobile_view === true) {
			orbLeftImgSeqWidth = 80;
			orbLeftImgSeqHeight = 80;
			orbRightImgSeqWidth = 120;
			orbRightImgSeqHeight = 120;
		} else {
			orbLeftImgSeqWidth = 200;
			orbLeftImgSeqHeight = 200;
			orbRightImgSeqWidth = 240;
			orbRightImgSeqHeight = 240;
		}
	};

	$: $is_mobile_view, evalutateMobileView();
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="relative w-auto h-auto bg-primary-main pt-48 sm:pb-24 md:pb-124 text-center">
	<Main>
		<div class="">
			<!-- <div class="w-auto h-auto">
				<Divider name="section-6-main-divider" w={'420'} h={'32'} pixCol={'#02232B'} />
			</div> -->
			<h5 class="md:text-h5 sm:text-h7 text-primary-dark font-bold">
				{data.primary.title[0].text}
			</h5>
		</div>
		<div class="flex justify-center w-full h-auto">
			<div class="w-960 h-auto pt-32 sm:text-p3 md:text-p2 font-medium">
				<p class="">{data.primary.paragraph[0].text}</p>
			</div>
		</div>
		<div
			class="flex items-center lg:text-h3 md:text-h4 sm:text-h6 text-primary-dark justify-center h-full w-auto md:space-x-48 sm:space-x-24 md:py-48 sm:py-24"
		>
			{#each data.items as item}
				<SocialButton
					icon={item.social_icon_label}
					name={item.social}
					active={item.active}
					url={item.social_network_url.url}
				/>
			{/each}
		</div>
		<div id="orb-left-wrapper" class="w-auto h-auto">
			<ImageSequence
				totalFrames={240}
				name={'section-5-orb-bottom'}
				url={'/assets/vids/orbitante-3-seq/'}
				imgWidth={orbLeftImgSeqWidth}
				imgHeight={orbLeftImgSeqHeight}
			/>
		</div>
		<div id="orb-right-wrapper" class="w-auto h-auto sm:right-100 sm:-top-72 md:-top-100">
			<ImageSequence
				totalFrames={240}
				name={'section-5-orb-right'}
				url={'/assets/vids/orbitante-2-seq/'}
				imgWidth={orbRightImgSeqWidth}
				imgHeight={orbRightImgSeqHeight}
			/>
		</div>
	</Main>
</div>

<style>
	#orb-left-wrapper {
		left: 100px;
		position: absolute;
		top: 300px;
		z-index: 4;
	}

	#orb-right-wrapper {
		position: absolute;
		rotate: 0deg;
		z-index: 50;
	}
</style>
