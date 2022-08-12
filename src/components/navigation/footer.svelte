<script>
	//LIBS
	import { onMount } from 'svelte';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	//COMPONENTS
	import SocialButton from '../button/dark/lg/social.svelte';

	//PROPS
	export let footerData;

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	$: $is_mobile_view;
</script>

<svelte:window bind:innerWidth={$window_width} />

{#if !$is_mobile_view}
	<div id="footer-wrapper">
		<div
			class="grid grid-flow-col md:grid-cols-1 lg:grid-cols-2 w-1920 max-w-full h-auto py-16 bg-primary-dark-alpha md:text-h7 lg:text-h5 text-primary-light backdrop-blur-md"
		>
			<div class="flex space-x-48 h-110 w-full justify-start pl-32">
				<div class="flex items-center w-full h-full">
					<img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" />
				</div>
				<div class="flex items-center w-full h-full">
					<p class="text-p4 font-medium">{footerData.copy_right}</p>
				</div>
			</div>
			<div class="flex items-center justify-end px-16 h-full w-auto md:space-x-24 lg:space-x-48">
				{#each footerData.social_network as item}
					<SocialButton
						icon={item.social_icon_label}
						name={item.social_nework_label}
						active={item.active}
						url={item.social_network_url.url}
					/>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div id="footer-wrapper" class="w-full space-y-16 p-16 h-full mx-auto">
		<div class="w-full flex justify-center">
			<img width="75%" height="auto" src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" />
		</div>
	</div>
{/if}

<style>
	/* #footer-wrapper {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 15;
	} */
</style>
