<script>
	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';
	import RoadmapQuarter from '../../components/information/roadmap-quarter.svelte';

	//PROPS
	export let data;
</script>

<div id="wrapper" class="h-auto w-auto py-32 md:mb-64">
	<div id="img-wrapper" class="h-full w-full" />
	<div class="h-full w-full">
		<div class="text-center font-bold text-primary-main sm:text-h7 md:text-h5">
			<div class="flex h-auto w-full items-center justify-center">
				<Divider
					name="roadmap-title-divider"
					w={'50'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<h5>{data.title[0].text}</h5>
		</div>
		<div class="flex h-auto w-full justify-center">
			<div class="flex h-full w-auto flex-col space-y-72 sm:py-72 md:py-124">
				{#each data.body as item}
					<RoadmapQuarter
						quarter={item.primary.quarter}
						year={item.primary.year}
						state={item.primary.state}
						items={item.items} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	#wrapper {
		position: relative;
	}

	#img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('/assets/imgs/bg-grabado-1.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#02232b55),
			to(#02232b00)
		);
		mask-image: linear-gradient(to bottom, #02232b66, #02232b00);
		z-index: -10;
	}
</style>
