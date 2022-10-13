<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let label;
	export let loading;
</script>

<!-- {#if !loading} -->

{#if !loading}
	<div
		class="h-56 flex w-auto items-center justify-center space-x-4 border-2 border-primary-main py-16 px-16 text-center text-p3 font-bold text-primary-main hover:cursor-pointer hover:bg-primary-main hover:text-primary-dark-variant">
		<div class="flex h-full w-auto space-x-16">
			<div id="img-wrapper" class="h-32 w-32 flex-none" />
			<div class="h-56 w-2 bg-primary-main hover:bg-primary-dark-variant" />
		</div>
		<div id="wallet-address" class="px-8">{label}</div>
	</div>
{:else}
	<div
		class="h-56 flex w-auto items-center justify-center space-x-4 border-2 border-primary-main py-16 px-16 text-center text-p3 font-bold text-primary-main">
		<div class="flex h-full w-auto space-x-16">
			<div id="img-wrapper" class="h-32 w-32 flex-none" />
			<div class="h-56 w-2 bg-primary-main hover:bg-primary-dark-variant" />
		</div>
		<div id="wallet-address" class="px-8">{label}</div>
		<!-- <div
			class="flex h-32 w-32 items-center justify-center px-16 py-8 text-center text-p3 font-bold text-primary-main">
			<Icon icon="eos-icons:loading" />
		</div> -->
	</div>
{/if}

<!-- {:else}
	<div
		class="h-56 flex w-auto items-center justify-center border-4 border-primary-main-variant px-16 py-8 text-center text-p2 font-bold text-primary-main">
		<Icon icon="eos-icons:loading" />
	</div>
{/if} -->
<style>
	#wallet-address {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 200px; /* some width */
	}

	#img-wrapper {
		background-image: url('/assets/imgs/eternl.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
