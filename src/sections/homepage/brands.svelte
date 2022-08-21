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
			maxHeight = '120px';
		} else if ($window_width <= 960) {
			maxHeight = '140px';
		} else {
			maxHeight = '200px';
		}
	};

	$: $window_width, evaluateWindowWidth();
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="sm:mt-64 md:mt-32">
	<Main>
		<!-- <div
			class="text-center font-bold text-primary-light sm:pb-72 sm:text-p3 md:pb-112 md:text-p2">
			<h1>{data.primary.brands_section_title[0].text.toUpperCase()}</h1>
		</div> -->
		<div
			class="2xl:mx-268 grid sm:grid-cols-1 sm:space-y-48 md:grid-cols-2 md:space-y-0 xl:mx-196">
			{#each data.items as item}
				<div class="flex h-full w-full items-center justify-center">
					<img
						style={`max-height: ${maxHeight};`}
						src={item.logo_image.url}
						alt={item.logo_image.alt} />
				</div>
			{/each}
		</div>
	</Main>
</div>
