<script>
	//STORES
	import { loaded, buttonLabel } from '../../../../stores/assetStore';

	//PROPS
	export let label;
	export let loading;

	$: tmpLabel = $buttonLabel;

	const handleMouseEnter = () => {
		tmpLabel = 'Disconnect';
	};

	const handleMouseLeave = () => {
		tmpLabel = $buttonLabel;
	};
</script>

{#if !loading}
	{#if $loaded}
		<div
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			class="flex h-full w-auto items-center justify-center space-x-4 text-center text-p3 font-bold text-primary-light hover:cursor-pointer hover:text-primary-main">
			<div id="wallet-address" class="px-16">{tmpLabel}</div>
		</div>
	{:else}
		<div
			class="flex h-full items-center justify-center text-center text-p3 font-bold text-primary-light hover:cursor-pointer hover:text-primary-main">
			<div id="wallet-address" class="px-16">{label}</div>
		</div>
	{/if}
{:else}
	<div
		class="flex h-full w-auto items-center justify-center space-x-4 text-center text-p3 font-bold text-primary-light">
		<div id="wallet-address" class="px-16">{label}</div>
	</div>
{/if}

<style>
	#wallet-address {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 200px;
	}
</style>
