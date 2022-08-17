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

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});
</script>

<svelte:window bind:innerWidth={$window_width} />

{#if $is_mobile_view}
	<div class="lg:h-110 flex justify-start sm:h-72 sm:w-64 lg:w-100">
		<div class="flex h-full w-full items-center">
			<a href="/">
				<div class="flex h-auto w-auto justify-center">
					<video width="90%" autoplay loop muted>
						<source
							src="/assets/vids/alpha/logo-alpha.webm"
							type="video/webm" />
					</video>
				</div>
			</a>
		</div>
	</div>
{:else}
	<div class="lg:h-110 flex justify-start sm:h-88 sm:w-80  lg:w-100">
		<div class="flex h-full w-full items-center">
			<a href="/">
				<div class="flex h-auto w-auto justify-center">
					<video width="90%" autoplay loop muted>
						<source
							src="/assets/vids/alpha/logo-alpha.webm"
							type="video/webm" />
					</video>
				</div>
			</a>
		</div>
	</div>
{/if}
