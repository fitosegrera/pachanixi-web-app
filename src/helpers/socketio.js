import { browser } from '$app/env';
import io from 'socket.io-client';
import { config } from '../stores/socketConfigStore';

// The following code snippet shows one way to get information
// from wrapping HTML page if wrapping the svelete app in one.
// This allows for setting data that is needed by the Svelte
// app outside of Svelte. Useful especially for server rendered
// pages that might have configuration data needed by the app.
// const url =
//   window.env && window.env.url ? window.env.url : "http://example.com:8000";

const url = config.url;

const socket = io(url, {
	autoConnect: false,
	reconnection: true,
	transports: ['websocket']
});

// Ease debugging socket during development
// if (!process.env.ROLLUP_WATCH) {
if (browser) {
	window.socket = socket;
}
// }

export default socket;
