<script>
	//LIBS
	import { onMount } from 'svelte';

	//STORES
	import {
		window_width,
		is_mobile_view,
		break_point
	} from '../../../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../../../helpers/mobileViewDetect';

	//COMPONENTS
	import ImageSequence from '../../../iteractive/image-sequence.svelte';

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});

	// $: console.log($window_width, $is_mobile_view, $break_point);
</script>

<svelte:window bind:innerWidth={$window_width} />

{#if $is_mobile_view}
	<div class="lg:h-110 flex justify-start sm:h-72 sm:w-64 lg:w-100">
		<div class="flex h-full w-full items-center">
			<!-- <img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" /> -->
			<a sveltekit:reload href="/">
				<ImageSequence
					totalFrames={40}
					name={'logo-seq'}
					url={'/assets/vids/logo-seq/'}
					imgWidth={60}
					imgHeight={64} />
			</a>
		</div>
	</div>
{:else}
	<div class="lg:h-110 flex justify-start sm:h-88 sm:w-80  lg:w-100">
		<div class="flex h-full w-full items-center">
			<!-- <img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" /> -->
			<a sveltekit:reload href="/">
				<ImageSequence
					totalFrames={40}
					name={'logo-seq'}
					url={'/assets/vids/logo-seq/'}
					imgWidth={88}
					imgHeight={94} />
			</a>
		</div>
	</div>
{/if}
