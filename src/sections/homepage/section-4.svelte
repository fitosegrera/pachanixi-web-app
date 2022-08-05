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
	<div class="text-wrapper w-full h-full pt-48">
		<div class="relative w-full h-full">
			<Main>
				<div class="w-full h-auto text-right px-112 text-h5 text-primary-main font-bold">
					<div class="flex w-full h-32 justify-end">
						<Divider name="section-4-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
					</div>
					<h5>{data.primary.title[0].text}</h5>
				</div>
				<div
					class="flex w-full h-auto space-x-32 my-48 justify-end px-112 text-h5 text-primary-main-variant"
				>
					<Icon icon={data.primary.icon_1_label} />
					<Icon icon={data.primary.icon_2_label} />
				</div>
				<div class="flex w-full h-auto items-center justify-end mb-160">
					<div class="pr-112 w-996 text-p1 font-medium text-primary-light text-right">
						<!-- <p>{data.primary.paragraph[0].text}</p> -->
						<p>{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}</p>
					</div>
				</div>
			</Main>
		</div>
	</div>
	<div class="button-wrapper w-full h-auto">
		<div class="flex w-full justify-center mb-96 ">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={'__blank'}
			/>
		</div>
	</div>
	<div class="video-wrapper w-full h-960">
		<video autoplay autobuffer loop muted>
			<source src="/assets/vids/demo-experience-section.webm" type="video/webm" />
		</video>
	</div>
</div>

<style>
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
