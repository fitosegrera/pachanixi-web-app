<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	//STORES
	import { chosenWallet } from '../../stores/assetStore';

	let dropIcon = 'ri:arrow-drop-down-line';
	let isDropped = false;

	let wallets = ['eternl', 'nami'];

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		isDropped = !isDropped;

		if (isDropped) {
			dropIcon = 'ri:arrow-drop-up-line';
		} else {
			dropIcon = 'ri:arrow-drop-down-line';
		}
	};

	const changeWallet = (wallet) => {
		dispatch('resetWallet');
		handleClick();
		$chosenWallet = wallet;
	};
</script>

<div class="h-56 flex w-72 items-center justify-center space-x-8">
	<div class="max-h-fit max-w-fit">
		<img
			width="32px"
			height="32px"
			src={`/assets/imgs/${$chosenWallet}.png`}
			alt="" />
	</div>
	<div
		class="max-h-fit max-w-fit cursor-pointer pt-8 text-p2 text-primary-light hover:text-primary-main"
		on:click={handleClick}>
		<Icon icon={dropIcon} />
	</div>
</div>

{#if isDropped}
	<div
		transition:fly={{ y: -320, opacity: 0 }}
		id="dropdown-wrapper"
		class="fixed -ml-64 mt-196 h-auto w-auto rounded-md border-2 border-darker-variant">
		{#each wallets as wallet}
			<div
				class="flex cursor-pointer items-center space-x-24 border-b-2 border-darker-variant bg-darker px-24 text-center text-h6 font-medium text-primary-light hover:bg-primary-dark-variant hover:text-primary-main"
				on:click={() => changeWallet(wallet)}>
				<div class="flex items-center">
					<img
						width="32px"
						height="32px"
						src={`/assets/imgs/${wallet}.png`}
						alt="" />
				</div>
				<div class=" flex items-center py-16">
					<p class="text-p3">{wallet}</p>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	#dropdown-wrapper {
		z-index: -100;
	}
</style>
