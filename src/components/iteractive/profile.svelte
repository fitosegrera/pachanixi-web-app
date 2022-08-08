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
		website_icon,
		website_url,
		twitter_icon,
		twitter_url,
		instagram_icon,
		instagram_url,
		facebook_icon,
		facebook_url;

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
		class="profile-wrapper w-full h-auto bg-primary-dark"
		transition:fly={{ x: 1920, opacity: 1 }}
	>
		<div class="grid grid-flow-col grid-cols-3 w-full h-auto">
			<div class="close-button-wrapper" on:click={handleClick}>
				<CloseButton icon={'ant-design:close-square-outlined'} />
			</div>
			<div class="img-wrapper pt-16" style="background-image: url({profile_picture})" />
			<div class="col-span-2 w-auto h-auto md:px-48 xl:px-72 2xl:px-112 pt-88 text-left">
				<div class="relative">
					<div class="md:text-h7 lg:text-h6 text-primary-main font-bold">
						<h6>{name}</h6>
					</div>
					<div class="text-p3 text-primary-light font-bold pt-4">
						<p>{rol}</p>
					</div>
					<div
						class="bio-wrapper md:text-p3 lg:text-p2 text-primary-light font-medium mt-48 md:pr-16 lg:pr-32"
					>
						<p>{bio}</p>
					</div>
					<div class="flex space-x-32 text-h5 text-primary-light font-medium pt-48">
						<SocialButton icon={website_icon} active={true} name={'website'} url={website_url} />
						<SocialButton icon={twitter_icon} active={true} name={'twitter'} url={twitter_url} />
						<SocialButton
							icon={instagram_icon}
							active={true}
							name={'instagram'}
							url={instagram_url}
						/>
						<SocialButton icon={facebook_icon} active={true} name={'facebook'} url={facebook_url} />
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="profile-wrapper-mobile bg-primary-dark" transition:fly={{ x: 1080, opacity: 1 }}>
		<div class="close-button-wrapper" on:click={handleClick}>
			<CloseButton icon={'ant-design:close-square-outlined'} />
		</div>
		<div class="img-wrapper-mobile" style="background-image: url({profile_picture})" />
		<div class="w-auto h-auto px-16 pt-24 text-center">
			<div class="lg:text-h6 sm:text-p1 text-primary-main font-bold">
				<h6>{name}</h6>
			</div>
			<div class="lg:text-p2 sm:text-p3 text-primary-light font-bold pt-4">
				<p>{rol}</p>
			</div>
			<div
				class="flex w-full px-16 justify-center space-x-24 text-h7 text-primary-light font-medium py-32"
			>
				<SocialButton icon={website_icon} active={true} name={'website'} url={website_url} />
				<SocialButton icon={twitter_icon} active={true} name={'twitter'} url={twitter_url} />
				<SocialButton icon={instagram_icon} active={true} name={'instagram'} url={instagram_url} />
				<SocialButton icon={facebook_icon} active={true} name={'facebook'} url={facebook_url} />
			</div>
			<div
				class="bio-wrapper-mobile sm:h-296 md:h-240 lg:text-p2 sm:text-p3 text-primary-light font-medium sm:pb-124"
			>
				<p>{bio}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.profile-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 60;
	}

	.profile-wrapper-mobile {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 60;
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
