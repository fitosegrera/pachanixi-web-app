<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	//STORES
	import {
		locale,
		languages,
		window_width,
		is_mobile_view,
		break_point
	} from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	let dropIcon = 'fe:drop-down';
	let isDropped = false;

	const handleClick = () => {
		isDropped = !isDropped;

		if (isDropped) {
			dropIcon = 'fe:drop-up';
		} else {
			dropIcon = 'fe:drop-down';
		}
	};

	const changeLanguage = (lang) => {
		$locale = lang;
		handleClick();
	};

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="h-auto w-auto">
	<div class="ml-16 flex w-full items-center justify-start space-x-12">
		<div class="text-primary-main sm:text-p1 md:text-h7 lg:text-h6">
			<Icon icon="ion:language" />
		</div>
		<div class="flex items-center">
			<div>
				<p
					class="font-medium text-primary-main text-primary-main sm:text-p1 md:text-h7">
					{$locale.split('-')[0]}
				</p>
			</div>
			<div
				class="cursor-pointer pt-8 text-primary-main hover:text-primary-light sm:text-p1 md:text-h7 lg:text-h6"
				on:click={handleClick}>
				<Icon icon={dropIcon} />
			</div>
		</div>
	</div>
	{#if isDropped}
		{#if $is_mobile_view}
			<div
				class="fixed flex h-screen w-full flex-col items-center justify-center space-y-16 bg-primary-dark"
				transition:fly={{ y: 1080, opacity: 1 }}>
				{#each $languages as lang}
					<div
						class="cursor-pointer text-center text-h6 font-medium text-primary-main hover:bg-primary-main hover:text-primary-dark"
						on:click={changeLanguage(lang)}>
						<div on:click={goto($page.url.pathname)}>
							<p class="">{lang}</p>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="fixed mx-80 h-auto w-116">
				{#each $languages as lang}
					<div
						class="cursor-pointer bg-primary-dark pt-16 text-center text-p1 text-primary-main hover:bg-primary-main hover:text-primary-dark"
						on:click={changeLanguage(lang)}>
						<div on:click={goto($page.url.pathname)}>
							<p class="">{lang}</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</div>
