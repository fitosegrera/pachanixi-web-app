<script>
	//STORES
	import { assetDataArr, walletConnected } from '../stores/assetStore';

	//COMPONENTS
	import NavbarWeb3 from '../components/navigation/navbar-web3.svelte';

	//CONTAINERS
	import Main from '../containers/main.svelte';
</script>

<NavbarWeb3 />
<Main>
	<div class="space-y-32 py-220">
		<div class="text-center text-p2 text-primary-light">
			{#if $walletConnected}
				<h1>{$assetDataArr.length} elegible assets</h1>
			{:else}
				<h1>Please connect wallet</h1>
			{/if}
		</div>
		<div class="flex items-center justify-center space-x-32">
			{#each $assetDataArr as asset}
				<div class="h-auto w-240">
					<img
						width="auto"
						height="auto"
						src={'https://ipfs.io/ipfs/' + asset.image.split('ipfs://')[1]}
						alt="" />
				</div>
			{/each}
		</div>
	</div>
</Main>
