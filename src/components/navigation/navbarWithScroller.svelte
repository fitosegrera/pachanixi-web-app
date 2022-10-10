<script>
	//LIBS
	import { onMount } from 'svelte';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	//COMPONENTS
	import SideBar from './sidebar.svelte';
	import SocialButton from '../button/dark/lg/social.svelte';
	import HamburgerButton from '../button/dark/lg/hamburger.svelte';
	import LogoButton from '../button/dark/lg/logo-static.svelte';
	import DiscordLockedButton from '../button/dark/lg/discord-locked.svelte';
	import Scroller from '../information/scroller.svelte';

	//PROPS
	export let navBarData;

	let showSideBar = false;

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	const openMenu = () => {
		showSideBar = true;
	};

	const closeMenu = () => {
		showSideBar = false;
	};

	let iconHeight = 60;
	let scrollerFontSize = 'h7';
	let scrollerHeight = 72;

	if ($window_width >= '960') {
		iconHeight = 64;
		scrollerFontSize = 'h7';
	} else {
		iconHeight = 60;
		scrollerFontSize = 'p1';
	}
</script>

<svelte:window bind:innerWidth={$window_width} />

{#if $is_mobile_view}
	<div id="navbar-wrapper">
		<div class="h-auto w-full">
			<Scroller
				fontSize={scrollerFontSize}
				h={scrollerHeight}
				data={'* MINTING NOW - PACHANIXI GENESIS PASS COLLECTION - 999 NFTS - 5 TYPES - UNIQUE UTILITY - STAKING - FUTURE WHITELISTS + MORE*'} />
		</div>
		<div
			class="grid h-auto w-full max-w-full grid-flow-col grid-cols-2 bg-primary-dark-alpha py-16 text-h5 text-primary-light backdrop-blur-md">
			<div class="flex h-72 w-64 items-center justify-start pl-8">
				<div class="cursor-pointer">
					<LogoButton />
				</div>
			</div>

			<div class="flex h-full w-auto items-center justify-end pr-4 text-h6">
				<div class="cursor-pointer hover:text-primary-main" on:click={openMenu}>
					<HamburgerButton />
				</div>
			</div>
			{#if showSideBar}
				<SideBar
					on:closeSideBar={closeMenu}
					menu={navBarData.menu}
					social={navBarData.social} />
			{/if}
		</div>
	</div>
{:else}
	<div id="navbar-wrapper" class="h-auto w-1920 max-w-full">
		<div class="h-auto w-full">
			<Scroller
				fontSize={scrollerFontSize}
				h={scrollerHeight}
				data={'* UPCOMING MINT - PACHANIXI GENESIS PASS COLLECTION - 999 NFTS - 5 TYPES - UNIQUE UTILITY - OCTOBER / 08 / 2022 AT CNFTCON *'} />
		</div>
		<div
			class="grid h-auto w-full grid-flow-col grid-cols-3 bg-primary-dark-alpha py-16 text-h5 text-primary-light backdrop-blur-md">
			<div
				class="lg:h-110 flex items-center justify-start pl-32 sm:h-88 sm:w-80 lg:w-100">
				<div class="cursor-pointer">
					<LogoButton />
				</div>
			</div>
			<div
				class="flex h-full w-auto items-center justify-center sm:space-x-16 lg:space-x-48">
				{#each navBarData.social as item}
					{#if item.active}
						{#if item.name !== 'discord'}
							<SocialButton
								icon={item.icon}
								name={item.name}
								active={item.active}
								url={item.url.url} />
						{:else}
							<DiscordLockedButton height={iconHeight} />
						{/if}
					{/if}
				{/each}
			</div>
			<div class="flex h-full w-auto items-center justify-end pr-16 text-h4">
				<div class="cursor-pointer hover:text-primary-main" on:click={openMenu}>
					<HamburgerButton />
				</div>
			</div>
			{#if showSideBar}
				<SideBar
					on:closeSideBar={closeMenu}
					menu={navBarData.menu}
					social={navBarData.social} />
			{/if}
		</div>
	</div>
{/if}

<style>
	#navbar-wrapper {
		position: fixed;
		z-index: 50;
	}
</style>
