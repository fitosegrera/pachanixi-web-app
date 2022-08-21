<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import * as prismicH from '@prismicio/helpers';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light pb-32">${children}</p>`;
		}
	};
</script>

<div class="relative h-auto w-full">
	<div class="text-wrapper h-full w-full pt-48">
		<div class="relative h-full w-full">
			<Main>
				<div
					class="h-auto w-full font-bold text-primary-main sm:px-16 sm:text-center sm:text-h7 md:px-32 md:text-h5 xl:text-right 2xl:px-112">
					<div class="flex h-auto w-full items-center justify-end">
						<Divider
							name="homepage-section-4-divider"
							w={'50'}
							h={'32'}
							pixCol={'#BDFF00'} />
					</div>
					<h5>{data.primary.title[0].text}</h5>
				</div>
				<div
					class="flex h-auto w-full space-x-32 text-primary-main sm:my-16 sm:justify-center sm:px-16 sm:text-h7 md:px-32 md:text-h5 xl:my-48 xl:justify-end 2xl:px-112">
					<Icon icon={data.primary.icon_1_label} />
					<Icon icon={data.primary.icon_2_label} />
				</div>
				<div
					class="mb-160 flex h-auto w-full items-center sm:justify-center xl:justify-end">
					<div
						class="font-medium text-primary-light sm:pr-16 sm:text-center sm:text-p3 md:pr-32 md:text-p1 lg:w-996 xl:text-right 2xl:pr-112">
						<!-- <p>{data.primary.paragraph[0].text}</p> -->
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
	<div class="button-wrapper h-auto w-full">
		<div class="flex w-full justify-center sm:mb-48 lg:mb-96">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={'__blank'} />
		</div>
	</div>
	<div class="video-wrapper flex justify-center sm:h-520 md:h-680 xl:h-auto">
		<video autoplay autobuffer loop muted>
			<source
				src="/assets/vids/demo-experience-section.webm"
				type="video/webm" />
		</video>
	</div>
</div>

<style>
	.video-wrapper {
		margin: 0 auto;
		background-color: black;
	}

	video {
		width: 100% !important;
		height: auto !important;
	}

	video::-internal-media-controls-overlay-cast-button {
		display: none;
	}

	.text-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
	}

	.button-wrapper {
		position: absolute;
		bottom: 0;
		z-index: 10;
	}
</style>
