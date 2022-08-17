<script>
	//LIBS
	import { onMount } from 'svelte';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	//COMPONENTS
	import SocialButton from '../button/dark/lg/social.svelte';
	import LogoButton from '../button/dark/lg/logo-static.svelte';

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
			class="grid h-auto w-1920 max-w-full grid-flow-col bg-primary-dark-alpha py-16 text-primary-light backdrop-blur-md md:grid-cols-1 md:text-h7 lg:grid-cols-2 lg:text-h5">
			<div class="flex h-full w-full justify-start space-x-32 px-32">
				<div class="flex items-center justify-center space-x-16">
					<div class="cursor-pointer">
						<LogoButton />
					</div>
				</div>
				<div class="flex h-full w-full items-center">
					<img src="/assets/imgs/logo-font-white.png" alt="pachanixi logo" />
				</div>
				<div class="flex h-full w-full items-center">
					<p class="text-p4 font-medium">{footerData.copy_right}</p>
				</div>
			</div>
			<div
				class="flex h-full w-auto items-center justify-end px-16 md:space-x-24 lg:space-x-48">
				{#each footerData.social_network as item}
					{#if item.active}
						<SocialButton
							icon={item.social_icon_label}
							name={item.social_nework_label}
							active={item.active}
							url={item.social_network_url.url} />
					{/if}
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="flex h-auto items-center justify-center px-32">
		<div class="flex items-center justify-center space-x-16">
			<div class="cursor-pointer">
				<LogoButton />
			</div>
			<div class="">
				<img
					style="max-width: 220px; width: auto;"
					src="/assets/imgs/logo-font-white.png"
					alt="pachanixi logo" />
			</div>
		</div>
	</div>
{/if}
