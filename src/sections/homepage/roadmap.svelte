<script>
	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';
	import RoadmapQuarter from '../../components/information/roadmap-quarter.svelte';

	//PROPS
	export let data;
</script>

<div id="wrapper" class="mb-64 h-auto w-auto py-32">
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
			<h5>ROADMAP</h5>
		</div>
		<div class="flex h-auto w-full justify-center">
			<div class="my-32 flex h-996 w-auto flex-col space-y-72 py-124">
				<RoadmapQuarter
					quarter={'Q1'}
					year={'2022'}
					state={'done'}
					items={['Pachanixi is born', 'Partners and sponsors', 'Branding']} />
				<RoadmapQuarter
					quarter={'Q3'}
					year={'2022'}
					state={'active'}
					items={[
						'Website release',
						'Demo 3D online experience',
						'Tree planting begins'
					]} />

				<RoadmapQuarter
					quarter={'Q2'}
					year={'2022'}
					state={'done'}
					items={[
						'NIXISEEDS collection design',
						'Website UX/UI design',
						'Whitepaper v_1.0'
					]} />
				<RoadmapQuarter
					quarter={'Q4'}
					year={'2022'}
					state={'upcoming'}
					items={[
						'NIXISEEDS NFT drop',
						'Microverse v_1.0',
						'Big scale tree planting'
					]} />
			</div>
		</div>
	</div>
	<div class="my-48">
		<div class="flex h-auto w-full items-center justify-center">
			<Divider name="roadmap-divider-soon" pixCol={'#F6FFFA44'} />
		</div>
		<div class="p-32 text-center">
			<h1 class="text-h5 font-bold text-primary-light-alpha">SOON</h1>
			<p class="text-p2 font-bold text-primary-light-alpha">2023 - ONWARDS</p>
		</div>
		<ul class="text-center text-p2 font-medium  text-primary-light-alpha">
			<li>Pachanixi is born</li>
			<li>Partners and sponsors</li>
			<li>Branding</li>
		</ul>
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
