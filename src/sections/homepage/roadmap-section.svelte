<script>
	//LIBS
	import Saos from 'saos';

	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';
	import RoadmapQuarter from '../../components/interactive/roadmap-quarter.svelte';
	import RoadmapQSlide from '../../components/information/roadmap-q-slide.svelte';

	//PROPS
	export let data;
	//console.log(data);

	let isSlideOpen = false;
	let q;

	const openQslideHandler = (e) => {
		isSlideOpen = true;
		q = e.detail;
		//console.log('SLIDE', e);
	};
	const closeQslideHandler = () => {
		isSlideOpen = false;
		// console.log('SLIDE', e);
	};
</script>

<div id="roadmap" class="h-auto w-auto md:mb-64">
	{#if isSlideOpen}
		<div id="roadmap">
			<RoadmapQSlide quarter={q} on:closeRoadmapQSlide={closeQslideHandler} />
		</div>
	{/if}
	<div id="info-wrapper" class="h-full w-full">
		<div
			class="py-32 text-center font-bold text-primary-main sm:text-h7 md:text-h3">
			<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div class="flex h-auto w-full items-center justify-center">
					<Divider
						name="roadmap-title-divider"
						w={'50'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h5>{data.title[0].text}</h5>
			</Saos>
		</div>
		<div class="my-124 flex h-full w-full flex-col items-center justify-center">
			<div
				class="grid gap-48 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each data.body as quarter, i}
					<Saos
						animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
						<RoadmapQuarter on:qSlide={openQslideHandler} {quarter} />
					</Saos>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	#roadmap {
		position: relative;
		background: linear-gradient(to bottom, #10181a, #10181a00);
	}

	#info-wrapper {
		z-index: -10;
	}
</style>
