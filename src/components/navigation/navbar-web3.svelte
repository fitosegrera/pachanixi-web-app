<script>
	import {
		Address,
		BaseAddress
	} from '@emurgo/cardano-serialization-lib-asmjs';
	import { Buffer } from 'buffer';

	//HELPERS
	import {
		getAssetsInWallet,
		getSpecificAsset
	} from '../../helpers/blockfrost.js';

	//STORES
	import { assetDataArr, walletConnected } from '../../stores/assetStore';

	//COMPONENTS
	import WalletInterface from '../button/dark/md/wallet-interface.svelte';
	import LogoButton from '../button/dark/lg/logo-static.svelte';

	let isEternlConnected = false;
	let assetPolicyId =
		'38f25e7bfba4b4c65de7b55d68475dcc6f02a376ec53c796ab5723b8';
	let walletAddress = '';
	let buttonLabel = 'Connect Wallet';
	$: loading = false;

	const handleWalletConnect = async () => {
		const eternl = await cardano.eternl.enable();
		buttonLabel = 'Loading...';
		loading = true;
		const balance = await eternl.getBalance();
		const baseAddress = await eternl.getChangeAddress();
		isEternlConnected = await cardano.eternl.isEnabled();

		const byteAddress = hexToBytes(baseAddress);
		const bechAddress = Address.from_bytes(
			Buffer.from(byteAddress)
		).to_bech32();

		//console.log(isEternlConnected, balance, byteAddress, bechAddress);
		walletAddress = bechAddress;

		if (isEternlConnected) {
			buttonLabel = walletAddress;
			loading = false;
		} else {
			buttonLabel = 'Connect Wallet';
		}

		// let assetDataArr = [];

		let assets = await getAssetsInWallet(bechAddress);
		//console.log(assets.amount);
		await assets.amount.forEach(async (asset) => {
			if (asset.unit.includes(assetPolicyId)) {
				let assetData = await getSpecificAsset(asset.unit);
				$assetDataArr = [...$assetDataArr, assetData.onchain_metadata];
				$walletConnected = true;
			} else {
				//console.log('No elegible asset found!');
			}
		});
	};

	const hexToBytes = (hex) => {
		let bytes = [];

		for (let i = 0; i < hex.length; i += 2) {
			bytes.push(parseInt(hex.substr(i, 2), 16));
		}

		return bytes;
	};

	const hex2a = (hexx) => {
		let hex = hexx.toString(); //force conversion
		let str = '';
		for (let i = 0; i < hex.length; i += 2) {
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		}
		return str;
	};
</script>

<div id="navbar-wrapper" class="h-auto w-1920 max-w-full">
	<div
		class="grid h-auto w-full grid-flow-col grid-cols-2 bg-primary-dark-alpha py-16 text-h5 text-primary-light backdrop-blur-md">
		<div
			class="lg:h-110 flex items-center justify-start pl-32 sm:h-88 sm:w-80 lg:w-72">
			<div class="cursor-pointer">
				<LogoButton />
			</div>
		</div>
		<div class="flex h-full w-auto items-center justify-end pr-16">
			<div
				class="flex items-center justify-center"
				on:click={handleWalletConnect}>
				<WalletInterface label={buttonLabel} {loading} />
			</div>
		</div>
	</div>
</div>

<style>
	#navbar-wrapper {
		position: fixed;
		z-index: 50;
	}
</style>
