<script>
	//LIBS
	import Saos from 'saos';

	//STORES
	import { window_width } from '../../stores/main';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//PROPS
	export let data;

	let maxHeight = '100px';

	const evaluateWindowWidth = () => {
		if ($window_width <= 640) {
			maxHeight = '64px';
		} else if ($window_width <= 960) {
			maxHeight = '72px';
		} else {
			maxHeight = '96px';
		}
	};

	$: $window_width, evaluateWindowWidth();
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="bg-primary-dark sm:py-124 md:py-132">
	<Main>
		<!-- <Saos animation={'from-left 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
			<div
				class="text-center font-bold text-primary-light sm:pb-72 sm:text-p3 md:pb-112 md:text-p2">
				<h1>{data.primary.brands_section_title[0].text.toUpperCase()}</h1>
			</div>
		</Saos> -->
		<Saos animation={'from-right 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
			<div class="2xl:mx-268 flex justify-center xl:mx-196">
				{#each data.items as item}
					<div class="flex h-full w-full items-center justify-center">
						<img
							style={`max-height: ${maxHeight};`}
							src={item.logo_image.url}
							alt={item.logo_image.alt} />
					</div>
				{/each}
			</div>
		</Saos>
	</Main>
</div>
