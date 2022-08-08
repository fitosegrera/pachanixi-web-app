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

<div class="relative h-auto w-full">
	<div class="text-wrapper h-auto w-full">
		<div class="h-auto w-full">
			<Main>
				<div class="h-auto w-full text-center">
					<!-- <div class="flex w-full h-32 justify-center">
						<Divider name="mint-hero-section-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
					</div> -->
					<div
						class="h-auto w-full text-center font-bold text-primary-main sm:space-x-16 sm:text-h6 md:flex md:items-center md:justify-center md:space-x-32 md:text-h5 lg:text-h3">
						<!-- <Icon icon="ci:image-alt"/> -->
						<h2 class="font-bold">
							{data.primary.heading[0].text}
						</h2>
					</div>
				</div>
				<div class="h-auto w-full text-center sm:pt-12 lg:pt-32">
					<h7
						class="gradient-text-primary-light font-bold sm:text-p2 md:text-p1 lg:text-h7"
						>{data.primary.subheading_1[0].text}</h7>
				</div>
				<div
					class="flex h-auto w-full items-center justify-center md:mb-72 md:mt-32">
					<div
						class="sm:w-90 text-center font-medium text-primary-light sm:mb-48 sm:pt-16 sm:text-p4 md:text-p2 xl:w-75">
						<p>
							{@html prismicH.asHTML(
								data.primary.paragraph,
								null,
								htmlSerializer
							)}
						</p>
					</div>
				</div>
			</Main>
		</div>
	</div>

	<div class="video-wrapper sm:h-420 md:h-960">
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
		/* width: auto;
		height: auto; */
		-webkit-transform: translate(-60%, -60%);
		-ms-transform: translate(-60%, -60%);
		transform: translate(-60%, -60%);
		pointer-events: none;
	}

	.text-wrapper {
		position: absolute;
		bottom: 0%;
		left: 0;
		z-index: 10;
	}
</style>
