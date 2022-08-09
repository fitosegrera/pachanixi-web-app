<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	let orbLeftImgSeqWidth = 72;
	let orbLeftImgSeqHeight = 72;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light pb-32">${children}</p>`;
		}
	};
</script>

<div id="wrapper" class="h-auto w-auto py-48 text-center">
	<Main>
		<div
			id="orb-left-wrapper"
			class="h-auto w-auto sm:right-45 sm:-top-16 md:left-124 lg:left-124 lg:top-800">
			<ImageSequence
				totalFrames={240}
				name={'hero-orb-left'}
				url={'/assets/vids/orbitante-3-seq/'}
				imgWidth={orbLeftImgSeqWidth}
				imgHeight={orbLeftImgSeqHeight} />
		</div>
		<div
			class="font-bold text-primary-main sm:pt-48 sm:text-p2 md:text-h6 lg:pt-64 lg:text-h5">
			<div class="flex h-full w-full justify-center">
				<Divider
					name="mint-section-1-divider"
					w={'50'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.section_1_title[0].text}</h5>
		</div>
		<div class="font-regular pt-48 sm:text-p3 md:text-p2">
			<p>
				{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
			</p>
		</div>
		<div class="flex w-auto justify-center sm:pt-32">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={'__blank'} />
		</div>
	</Main>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: 1;
	}

	#orb-left-wrapper {
		position: absolute;
		opacity: 0.5;
		/* left: 120px;
		top: 800px; */
	}
</style>
