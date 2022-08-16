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
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	let orbSize = '40%';

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	const evaluateWindowWidth = () => {
		if ($is_mobile_view === true) {
			orbSize = '20%';
		} else {
			orbSize = '40%';
		}
	};

	$: $is_mobile_view, evaluateWindowWidth();
</script>

<svelte:window bind:innerWidth={$window_width} />

<div
	class="relative h-auto w-auto bg-primary-main pt-48 text-center sm:pb-24 md:pb-124">
	<Main>
		<div class="">
			<div class="flex h-auto w-full items-center justify-center">
				<Divider
					name="homepage-section-6-divider"
					w={'50'}
					h={'32'}
					pixCol={'#02232B'} />
			</div>
			<h5 class="font-bold text-primary-dark sm:text-h7 md:text-h5">
				{data.primary.title[0].text}
			</h5>
		</div>
		<div class="flex h-auto w-full justify-center">
			<div
				class="h-auto w-960 pt-32 font-medium sm:text-p3 md:text-p2 lg:text-p1">
				<p class="">{data.primary.paragraph[0].text}</p>
			</div>
		</div>
		<div
			class="flex h-full w-auto items-center justify-center text-primary-dark sm:space-x-24 sm:py-24 sm:text-h6 md:space-x-48 md:py-48 md:text-h4 lg:text-h3">
			{#each data.items as item}
				{#if item.active}
					<SocialButton
						icon={item.social_icon_label}
						name={item.social}
						active={item.active}
						url={item.social_network_url.url} />
				{/if}
			{/each}
		</div>
		<div id="orb-left-wrapper" class="h-auto w-auto sm:top-112">
			<video width={orbSize} autoplay loop muted>
				<source
					src="/assets/vids/alpha/orbitante-3-alpha.webm"
					type="video/webm" />
			</video>
		</div>
		<div
			id="orb-right-wrapper"
			class="h-auto w-auto sm:-right-224 sm:-top-72 md:-right-210 md:-top-64 lg:-right-124">
			<video width={orbSize} autoplay loop muted>
				<source
					src="/assets/vids/alpha/orbitante-2-alpha.webm"
					type="video/webm" />
			</video>
		</div>
	</Main>
</div>

<style>
	#orb-left-wrapper {
		position: absolute;
		z-index: 4;
	}

	#orb-right-wrapper {
		position: absolute;
		rotate: 0deg;
		z-index: 20;
	}
</style>
