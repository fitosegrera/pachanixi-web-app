<script>
	//STORES
	import { window_width } from '../../stores/main';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//PROPS
	export let data;

	let maxHeight = '200px';

	const evaluateWindowWidth = () => {
		if ($window_width <= 640) {
			maxHeight = '100px';
		} else if ($window_width <= 960) {
			maxHeight = '120px';
		} else {
			maxHeight = '200px';
		}
	};

	$: $window_width, evaluateWindowWidth();
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="sm:pt-112 md:pt-196">
	<Main>
		<div
			class="pb-112 text-center font-bold text-primary-light sm:text-p3 md:text-p2">
			<h1>{data.primary.brands_section_title[0].text.toUpperCase()}</h1>
		</div>
		<div class="grid sm:grid-cols-1 sm:space-y-72 md:grid-cols-3 md:space-y-0">
			{#each data.items as item}
				<div class="flex h-full w-full items-center justify-center">
					<img
						style={`max-height: ${maxHeight};`}
						src={item.logo_image.url}
						alt={item.logo_image.alt} />
				</div>
			{/each}
			<!-- <img src={data.primary.logo_image.url} alt="" /> -->
		</div>
	</Main>
</div>
