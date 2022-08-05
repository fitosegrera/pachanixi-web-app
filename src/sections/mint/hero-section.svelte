<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';
	import Icon from '@iconify/svelte';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';

	//PORPS
	export let data;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
	};
</script>

<div class="relative w-full h-auto">
	<div class="text-wrapper w-full h-auto">
		<div class="relative w-full h-auto">
			<Main>
				<div class="w-full h-auto text-center text-h2 text-primary-main font-bold">
					<div class="flex w-full h-32 justify-center">
						<Divider name="mint-hero-section-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
					</div>
					<div
						class="flex justify-center items-center space-x-32 text-h3 text-primary-main w-full h-auto text-center"
					>
						<Icon icon="ci:image-alt" />
						<h2 class="font-bold">
							{data.primary.heading[0].text}
						</h2>
					</div>
				</div>
				<div class="w-full h-auto text-center pt-32">
					<h7 class="text-h6 gradient-text-primary-light font-bold"
						>{data.primary.subheading_1[0].text}</h7
					>
				</div>
				<div class="flex w-full h-auto items-center justify-center mt-32 mb-72">
					<div class="w-50 text-p2 font-medium text-primary-light text-center">
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
		min-width: 160%;
		min-height: 160%;
		width: auto;
		height: auto;
		-webkit-transform: translate(-60%, -60%);
		-ms-transform: translate(-60%, -60%);
		transform: translate(-60%, -60%);
		pointer-events: none;
	}

	.text-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 10;
	}
</style>
