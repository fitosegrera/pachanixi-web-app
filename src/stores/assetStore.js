import { writable } from 'svelte/store';

export const assetDataArr = writable([]);
export const walletConnected = writable(false);
export const loaded = writable(false);
export const walletState = writable('Connect wallet');
export const stakeAddress = writable('');
export const mainAddress = writable('');
export const chosenWallet = writable('eternl');
export const buttonLabel = writable('');
