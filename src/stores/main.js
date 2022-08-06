import { writable, readable } from 'svelte/store';

export const loading = writable(false);
export const img_seq_loading = writable(0);

const breakPointWidth = 820;
export const break_point = readable(breakPointWidth);
export const is_mobile_view = writable(false);
export const window_width = writable(1920);
