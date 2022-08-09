<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

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

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	$: $is_mobile_view;
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="relative h-screen w-full">
	<div class="text-wrapper h-auto w-full sm:pt-124 md:pt-160 xl:pt-196">
		<div class="h-full w-full">
			<Main>
				<div class="h-auto w-full text-center">
					<div
						class="flex h-auto w-full flex-col text-center font-bold text-primary-main sm:space-x-16 sm:text-h6 md:flex md:items-center md:justify-center md:space-x-32 md:text-h5 lg:text-h3">
						{#if $is_mobile_view}
							<div class="flex flex-col items-center justify-center">
								<div class="pb-16 sm:text-h6 md:text-h4">
									<Icon icon="ci:image-alt" />
								</div>
								<div>
									<h2 class="font-bold">
										{data.primary.heading[0].text}
									</h2>
								</div>
							</div>
						{:else}
							<div class="flex h-full w-full justify-center">
								<Divider
									name="mint-hero-section-divider"
									w={'50'}
									h={'32'}
									pixCol={'#BDFF00'} />
							</div>
							<div class="flex justify-center space-x-16">
								<Icon icon="ci:image-alt" />
								<h2 class="font-bold">
									{data.primary.heading[0].text}
								</h2>
							</div>
						{/if}
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
						class="sm:w-90 text-center font-medium text-primary-light sm:mb-48 sm:pt-16 sm:text-p3 md:w-75 md:text-p2 xl:w-50">
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

	<div class="video-wrapper h-960 w-full">
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
		/* top: 50%;
		left: 50%; */
		z-index: -100;
		min-width: 100%;
		min-height: 160%;
		width: auto;
		height: auto;
		-webkit-transform: translate(0%, 0%);
		-ms-transform: translate(0%, 0%);
		transform: translate(0%, 0%);
		pointer-events: none;
	}

	.text-wrapper {
		position: absolute;
		top: 0%;
		left: 0;
		z-index: 10;
	}
</style>
