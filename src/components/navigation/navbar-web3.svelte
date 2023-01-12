<script>
	//LIBS
	// import {
	// 	Address,
	// 	BaseAddress,
	// 	RewardAddress,
	// 	Value
	// } from '@emurgo/cardano-serialization-lib-asmjs';
	//import Wallet from '@harmonicpool/cardano-wallet-interface';
	import { Buffer } from 'buffer';

	//HELPERS
	import {
		getAssetsInWallet,
		getSpecificAsset,
		getAssociatedAddresses
	} from '../../helpers/blockfrost.js';

	//STORES
	import {
		assetDataArr,
		mainAddress,
		walletConnected,
		walletState,
		stakeAddress,
		chosenWallet,
		loaded,
		buttonLabel
	} from '../../stores/assetStore';

	//COMPONENTS
	import WalletConnect from '../button/dark/md/wallet-connect.svelte';
	import WalletDropdown from './wallet-dropdown.svelte';

	let isWalletConnected = false;
	let assetPolicyId =
		'87e7591164a9dd6193d3f7919ad1fee562efa45a6ed690b3dfbeb4c4';
	$buttonLabel = 'Connect Wallet';
	$walletState = 'Connect Wallet';
	$: loading = false;
	let totalAssets;
	let assetCount;
	let eligibleAssetsCount;
	let activeWallet;

	const resetWallet = async () => {
		totalAssets = 0;
		assetCount = 0;
		eligibleAssetsCount = 0;
		$assetDataArr = [];
		$mainAddress = '';
		$stakeAddress = '';
		$loaded = false;
		$walletState = 'Connect Wallet';
		$buttonLabel = 'Connect Wallet';
	};

	const handleWalletConnect = async () => {
		resetWallet();

		if (Wallet.has(Wallet.Names.Eternl)) {
			console.log('WALLET');
			// if( !await Wallet.isEnabled( Wallet.Names.Nami ) )
			// {
			//     Wallet.enable( Wallet.Names.Nami )
			//     .then(
			//         () => {
			//             Wallet.Nami.delegateTo(
			//                 "<your pool id>",
			//                 "<your blockforst api key>"
			//             );
			//         }
			//     );
			// }
			// else
			// {
			//     Wallet.Nami.delegateTo(
			//         "<your pool id>",
			//         "<your blockforst api key>"
			//     );
			// }
		}

		// 	if ($chosenWallet == 'eternl') {
		// 		isWalletConnected = await cardano.eternl.isEnabled();

		// 		if (cardano.eternl !== undefined) {
		// 			await cardano.eternl.off;
		// 			console.log('disconnected ETERNL wallet before process starts');
		// 		} else {
		// 			console.error('ETERNL wallet undefined', cardano.eternl);
		// 		}

		// 		if (isWalletConnected) {
		// 			console.log('Wallet already connected!, disconnecting now...');
		// 			await cardano.eternl.off;
		// 		} else {
		// 			console.log('Wallet not connected.');
		// 		}
		// 		activeWallet = await cardano.eternl.enable();
		// 		console.log(activeWallet);
		// 	}

		// 	if ($chosenWallet == 'nami') {
		// 		if (cardano.nami !== undefined) {
		// 			await cardano.nami.off;
		// 		}
		// 		activeWallet = await cardano.nami.enable();
		// 		console.log(activeWallet);
		// 		isWalletConnected = await cardano.nami.isEnabled();
		// 	}

		// 	$walletState = 'Connecting...';
		// 	$buttonLabel = 'Connecting...';
		// 	loading = true;
		// 	let balance = await activeWallet.getBalance();
		// 	balance = Value.from_bytes(hexToBytes(balance));
		// 	balance = parseFloat(balance.coin().to_str()) * 0.000001;
		// 	const baseAddress = await activeWallet.getChangeAddress();

		// 	const byteAddress = hexToBytes(baseAddress);
		// 	const bechAddress = Address.from_bytes(
		// 		Buffer.from(byteAddress)
		// 	).to_bech32();

		// 	$mainAddress = bechAddress;

		// 	getAddressStakeKey(bechAddress, async (stake) => {
		// 		$stakeAddress = stake;
		// 		const associatedAddresses = await getAssociatedAddresses(stake);
		// 		console.log(associatedAddresses);

		// 		await associatedAddresses.forEach(async (obj) => {
		// 			const tmpAssets = await getAssetsInWallet(obj.address);
		// 			console.log(tmpAssets.amount);
		// 			totalAssets += tmpAssets.amount.length;

		// 			await tmpAssets.amount.forEach(async (asset) => {
		// 				const tmpPolicyId = asset.unit;
		// 				assetCount++;

		// 				if (tmpPolicyId.startsWith(assetPolicyId)) {
		// 					let assetData = await getSpecificAsset(tmpPolicyId);
		// 					console.log(assetData.onchain_metadata);
		// 					$assetDataArr = [...$assetDataArr, assetData.onchain_metadata];
		// 					$walletConnected = true;
		// 					eligibleAssetsCount++;

		// 					if (assetCount === totalAssets) {
		// 						if (isWalletConnected) {
		// 							$buttonLabel = '₳' + balance + ' ';
		// 							$walletState = eligibleAssetsCount + ' eligible asset(s) found';
		// 							loading = false;
		// 							$loaded = true;
		// 						} else {
		// 							$walletState = 'Connect Wallet';
		// 							$buttonLabel = 'Connect Wallet';
		// 						}
		// 					}
		// 				}
		// 			});

		// 			if (eligibleAssetsCount == 0) {
		// 				$buttonLabel = '₳' + balance + ' ';
		// 				$walletState = '0 eligible asset(s) found';
		// 				loading = false;
		// 				$loaded = true;
		// 			}
		// 		});
		// 	});
	};

	const getAddressStakeKey = (addr, callback) => {
		const address = Address.from_bech32(addr);
		const base = BaseAddress.from_address(address);
		const stake = RewardAddress.new(address.network_id(), base.stake_cred())
			.to_address()
			.to_bech32();

		callback(stake);
	};

	const hex2a = (hexx) => {
		let hex = hexx.toString(); //force conversion
		let str = '';

		for (let i = 0; i < hex.length; i += 2) {
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		}

		return str;
	};

	const hexToBytes = (hex) => {
		let bytes = [];

		for (let i = 0; i < hex.length; i += 2) {
			bytes.push(parseInt(hex.substr(i, 2), 16));
		}

		return bytes;
	};
</script>

<div id="navbar-wrapper" class="h-auto w-1920 max-w-full bg-primary-dark">
	<div
		class="grid h-auto w-full grid-flow-col grid-cols-2 bg-primary-dark py-16 text-h5 text-primary-light backdrop-blur-md">
		<!-- <div class="w-full" /> -->
		<div class="flex w-368 items-center justify-start pl-32">
			<img src="/assets/imgs/logo-horizontal-green.png" alt="" />
		</div>
		<div class="flex h-auto w-full items-center justify-end px-32">
			<div
				class="flex max-h-fit max-w-fit items-center rounded-md border-2 border-darker-variant">
				<div
					class="flex max-h-fit max-w-fit items-center justify-center border-r-2 border-darker-variant px-16 py-8">
					<WalletDropdown on:resetWallet={resetWallet} />
				</div>
				<div
					class="flex h-full max-w-fit items-center justify-center"
					on:click={() => (!$loaded ? handleWalletConnect() : resetWallet())}>
					<WalletConnect label={$buttonLabel} {loading} />
				</div>
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
