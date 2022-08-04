<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';
	import Icon from '@iconify/svelte';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';
	import LogoButton from '../../components/information/logo-static.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PORPS
	export let data;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
	};
</script>

<!-- <div id="wrapper" class="w-auto h-auto bg-primary-dark py-160">
	<Main>
		<div class="w-full h-auto">
			<div
				class="flex justify-center items-center space-x-32 text-h3 text-primary-main w-full h-auto text-center pt-32"
			>
				<Icon icon="ci:image-alt" />
				<h3 class="font-bold">
					{data.primary.heading[0].text}
				</h3>
			</div>
			<div class="w-full h-auto text-center pt-32">
				<h7 class="text-h7 gradient-text-primary-light font-bold"
					>{data.primary.subheading_1[0].text}</h7
				>
			</div>
			<div class="w-full h-auto text-center pt-48 pb-32">
				<p class="text-p2 text-primary-light font-medium">
					{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
				</p>
			</div>
		</div>
	</Main>
	<div class="flex w-auto justify-center mb-32">
		<Divider name="section-1-divider" w={'full'} h={'32'} pixCol={'#BDFF00'} />
	</div>
	<div class="grid grid-cols-4">
		<div>
			<video width="100%" height="auto" autoplay loop muted>
				<source src="/assets/vids/nft-0.mp4" type="video/mp4" />
			</video>
		</div>
		<div>
			<video width="100%" height="auto" autoplay loop muted>
				<source src="/assets/vids/nft-1.mp4" type="video/mp4" />
			</video>
		</div>
		<div>
			<video width="100%" height="auto" autoplay loop muted>
				<source src="/assets/vids/nft-2.mp4" type="video/mp4" />
			</video>
		</div>
		<div>
			<video width="100%" height="auto" autoplay loop muted>
				<source src="/assets/vids/nft-3.mp4" type="video/mp4" />
			</video>
		</div>
	</div>
</div> -->

<div class="relative w-full h-auto">
	<div class="text-wrapper w-full h-auto">
		<div class="relative w-full h-auto">
			<Main>
				<div class="w-full h-auto text-left text-h5 text-primary-main font-bold">
					<div class="flex w-full h-32 justify-left">
						<Divider name="mint-hero-section-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
					</div>
					<div
						class="flex justify-left items-center space-x-32 text-h3 text-primary-main w-full h-auto text-left pt-32"
					>
						<Icon icon="ci:image-alt" />
						<h3 class="font-bold">
							{data.primary.heading[0].text}
						</h3>
					</div>
				</div>
				<div class="w-full h-auto text-left pt-32">
					<h7 class="text-h7 gradient-text-primary-light font-bold"
						>{data.primary.subheading_1[0].text}</h7
					>
				</div>
				<div class="flex w-full h-auto items-center justify-left mt-32 mb-160">
					<div class="w-50 text-p2 font-medium text-primary-light text-left">
						<!-- <p>{data.primary.paragraph[0].text}</p> -->
						<p>{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}</p>
					</div>
				</div>
			</Main>
		</div>
	</div>

	<div class="video-wrapper w-full h-960">
		<video autoplay autobuffer loop muted>
			<source src="/assets/vids/mint-hero-section.webm" type="video/webm" />
		</video>
	</div>
</div>

<style>
	* {
		overflow: hidden;
	}

	video {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -100;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		pointer-events: none;
	}

	.text-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 10;
	}
</style>
