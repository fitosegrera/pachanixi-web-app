<script>
	//LIBS
	import { onMount } from 'svelte';

	//STORES
	import { window_width, is_mobile_view, break_point } from '../../../../stores/main';

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
	<div class="flex lg:h-110 lg:w-100 sm:h-88 sm:w-80  justify-start">
		<div class="flex items-center w-full h-full">
			<!-- <img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" /> -->
			<a sveltekit:reload href="/">
				<ImageSequence
					totalFrames={40}
					name={'logo-seq'}
					url={'/assets/vids/logo-seq/'}
					imgWidth={72}
					imgHeight={78}
				/>
			</a>
		</div>
	</div>
{:else}
	<div class="flex lg:h-110 lg:w-100 sm:h-88 sm:w-80  justify-start">
		<div class="flex items-center w-full h-full">
			<!-- <img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" /> -->
			<a sveltekit:reload href="/">
				<ImageSequence
					totalFrames={40}
					name={'logo-seq'}
					url={'/assets/vids/logo-seq/'}
					imgWidth={88}
					imgHeight={94}
				/>
			</a>
		</div>
	</div>
{/if}
