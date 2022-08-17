<script>
	//LIBS
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	//COMPONENTS
	import MenuItem from './menu-item.svelte';
	import SocialButton from '../button/dark/lg/social.svelte';
	import CloseButton from '../button/dark/lg/close.svelte';
	import LanguageDropdown from '../navigation/language-dropdown.svelte';

	//PROPS
	export let menu, social;

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('closeSideBar');
	};
</script>

<div class="sidebar bg-primary-dark" transition:fly={{ y: -1080, opacity: 1 }}>
	<div class="grid grid-cols-2">
		<div class="flex items-center justify-start">
			<LanguageDropdown />
		</div>
		<div class="flex items-center justify-end">
			<div on:click={handleClick}>
				<CloseButton icon={'ant-design:close-square-outlined'} />
			</div>
		</div>
	</div>
	<div>
		<div class="sm:mt-64 md:mt-32 lg:mt-0">
			{#each menu as item}
				<div class="mt-16 h-auto w-auto" on:click={handleClick}>
					<MenuItem label={item.item} url={item.url} />
				</div>
			{/each}
		</div>
		<div
			class="mt-16 flex h-full w-auto items-center justify-center sm:space-x-24 md:space-x-48">
			{#each social as item}
				{#if item.active}
					<div
						class="cursor-pointer hover:text-primary-light sm:text-h6 md:text-h5">
						<SocialButton
							icon={item.icon}
							name={item.name}
							active={item.active}
							url={item.url.url} />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.sidebar {
		position: fixed;
		width: 100%;
		height: 100vh;
		z-index: 10;
		overflow-y: scroll !important;
	}
</style>
