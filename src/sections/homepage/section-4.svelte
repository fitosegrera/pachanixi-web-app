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

<div class="relative w-full h-auto">
	<div class="text-wrapper w-full h-full xl:pt-48 sm:pt-32">
		<div class="relative w-full h-full">
			<Main>
				<div
					class="w-full h-auto xl:text-right sm:text-center 2xl:px-112 md:px-32 sm:px-16 md:text-h5 sm:text-h7 text-primary-main font-bold"
				>
					<div class="flex w-full h-32 xl:justify-end sm:justify-center">
						<Divider name="section-4-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
					</div>
					<h5>{data.primary.title[0].text}</h5>
				</div>
				<div
					class="flex w-full h-auto space-x-32 xl:my-48 sm:my-16 xl:justify-end sm:justify-center 2xl:px-112 md:px-32 sm:px-16 md:text-h5 sm:text-h7 text-primary-main-variant"
				>
					<Icon icon={data.primary.icon_1_label} />
					<Icon icon={data.primary.icon_2_label} />
				</div>
				<div class="flex w-full h-auto items-center xl:justify-end sm:justify-center mb-160">
					<div
						class="2xl:pr-112 md:pr-32 sm:pr-16 lg:w-996 md:text-p1 sm:text-p3 font-medium text-primary-light xl:text-right sm:text-center"
					>
						<!-- <p>{data.primary.paragraph[0].text}</p> -->
						<p>{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}</p>
					</div>
				</div>
			</Main>
		</div>
	</div>
	<div class="button-wrapper w-full h-auto">
		<div class="flex w-full justify-center lg:mb-96 sm:mb-48">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={'__blank'}
			/>
		</div>
	</div>
	<div class="video-wrapper flex justify-center xl:h-auto md:h-680 sm:h-480">
		<video autoplay autobuffer loop muted>
			<source src="/assets/vids/demo-experience-section.webm" type="video/webm" />
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
