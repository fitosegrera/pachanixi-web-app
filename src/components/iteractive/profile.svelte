<script>
	//LIBS
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	//COMPONENTS
	import CloseButton from '../button/dark/lg/close.svelte';
	import SocialButton from '../button/dark/lg/social.svelte';

	//PROPS
	export let profile_picture,
		name,
		rol,
		bio,
		website_state,
		website_icon,
		website_url,
		twitter_state,
		twitter_icon,
		twitter_url,
		discord_state,
		discord_icon,
		discord_url,
		instagram_state,
		instagram_icon,
		instagram_url,
		facebook_state,
		facebook_icon,
		facebook_url;

	console.log(website_url);

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('closeProfile');
	};

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	$: $is_mobile_view;
</script>

<svelte:window bind:innerWidth={$window_width} />

{#if !$is_mobile_view}
	<div
		class="profile-wrapper h-screen w-full bg-primary-dark"
		transition:fly={{ x: 1920, opacity: 1 }}>
		<div class="grid h-screen w-full grid-flow-col grid-cols-3">
			<div class="close-button-wrapper" on:click={handleClick}>
				<CloseButton icon={'ant-design:close-square-outlined'} />
			</div>
			<div
				class="img-wrapper pt-16"
				style="background-image: url({profile_picture})" />
			<div
				class="col-span-2 h-auto w-auto pt-88 text-left md:px-48 xl:px-72 2xl:px-112">
				<div class="relative">
					<div class="font-bold text-primary-main md:text-h7 lg:text-h6">
						<h6>{name}</h6>
					</div>
					<div class="pt-4 text-p3 font-bold text-primary-light">
						<p>{rol}</p>
					</div>
					<div
						class="bio-wrapper mt-48 font-medium text-primary-light md:pr-16 md:text-p3 lg:pr-32 lg:text-p2">
						<p>{bio}</p>
					</div>
					<div
						class="flex space-x-32 pt-48 text-h5 font-medium text-primary-light">
						{#if website_state}
							<SocialButton icon={website_icon} url={website_url} />
						{/if}
						{#if twitter_state}
							<SocialButton icon={twitter_icon} url={twitter_url} />
						{/if}
						{#if discord_state}
							<SocialButton icon={discord_icon} url={discord_url} />
						{/if}
						{#if instagram_state}
							<SocialButton icon={instagram_icon} url={instagram_url} />
						{/if}
						{#if facebook_state}
							<SocialButton icon={facebook_icon} url={facebook_url} />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div
		class="profile-wrapper-mobile h-screen w-full bg-primary-dark"
		transition:fly={{ x: 1080, opacity: 1 }}>
		<div class="close-button-wrapper" on:click={handleClick}>
			<CloseButton icon={'ant-design:close-square-outlined'} />
		</div>
		<div
			class="img-wrapper-mobile"
			style="background-image: url({profile_picture})" />
		<div class="h-screen w-full px-16 pt-24 text-center">
			<div class="font-bold text-primary-main sm:text-p1 lg:text-h6">
				<h6>{name}</h6>
			</div>
			<div class="pt-4 font-bold text-primary-light sm:text-p3 lg:text-p2">
				<p>{rol}</p>
			</div>
			<div
				class="flex w-full justify-center space-x-24 px-16 py-32 text-h7 font-medium text-primary-light">
				{#if website_state}
					<SocialButton icon={website_icon} url={website_url} />
				{/if}
				{#if twitter_state}
					<SocialButton icon={twitter_icon} url={twitter_url} />
				{/if}
				{#if discord_state}
					<SocialButton icon={discord_icon} url={discord_url} />
				{/if}
				{#if instagram_state}
					<SocialButton icon={instagram_icon} url={instagram_url} />
				{/if}
				{#if facebook_state}
					<SocialButton icon={facebook_icon} url={facebook_url} />
				{/if}
			</div>
			<div
				class="bio-wrapper-mobile font-medium text-primary-light sm:h-296 sm:pb-124 sm:text-p3 md:h-240 lg:text-p2">
				<p>{bio}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.profile-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.profile-wrapper-mobile {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.close-button-wrapper {
		position: absolute;
		top: 0;
		right: 0;
	}

	.img-wrapper {
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 10;
	}

	.img-wrapper-mobile {
		min-width: 100%;
		min-height: 50vw;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 10;
	}

	.bio-wrapper {
		overflow-y: scroll;
		width: 100%;
		height: 360px;
	}

	.bio-wrapper-mobile {
		overflow-y: scroll;
		width: 100%;
	}

	::-webkit-scrollbar {
		width: 20px;
	}

	::-webkit-scrollbar {
		width: 12px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #02232b;
		border-radius: 0px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #bdff00;
		border-radius: 0px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #f6fffa;
	}
</style>
