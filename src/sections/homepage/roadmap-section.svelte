<script>
	//LIBS
	import Saos from 'saos';

	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';
	import RoadmapQuarter from '../../components/information/roadmap-quarter.svelte';
	import Hexagon from '../../components/information/hexagon.svelte';
	import Node from '../../components/sketch/node.svelte';

	//PROPS
	export let data;

	let roadmapData = [
		{
			q: 'q1',
			year: '2022',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		},
		{
			q: 'q2',
			year: '2022',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		},
		{
			q: 'q3',
			year: '2022',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		},
		{
			q: 'q4',
			year: '2022',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		},
		{
			q: 'q1',
			year: '2023',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		},
		{
			q: 'q2',
			year: '2023',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		},
		{
			q: 'q3',
			year: '2023',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		},
		{
			q: 'q4',
			year: '2023',
			items: [
				'First item here.',
				'Second item here.',
				'Third item here.',
				'Fourth item here.'
			]
		}
	];
</script>

<div id="wrapper" class="h-auto w-auto py-32 md:mb-64">
	<div class="h-full w-full">
		<div class="text-center font-bold text-primary-main sm:text-h7 md:text-h5">
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
			<div class="grid grid-cols-4 gap-48">
				{#each roadmapData as quarter, i}
					<Saos
						animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
						<div class="hexagon-wrapper px-auto relative">
							<div class="node-wrapper">
								<div
									class="text-wrapper flex h-full w-full flex-col items-center justify-center">
									<div>
										<h2 class="text-center text-p1 font-bold text-primary-main">
											{quarter.q.toUpperCase()}
										</h2>
									</div>
									<div>
										<h2
											class="text-center text-p2 font-bold text-primary-light">
											{quarter.year}
										</h2>
									</div>
								</div>

								<Node
									canvasMargin={26}
									orbitMargin={56}
									w={224}
									h={224}
									bgColor={'#000000'}
									orbitColor={'#DBFF7344'}
									planetColor={'#BDFF00'}
									orbits={2} />
							</div>
							<Hexagon />
						</div>
					</Saos>
				{/each}
			</div>
		</div>
		<!-- <div class="flex h-auto w-full justify-center">
			<div class="flex h-full w-auto flex-col space-y-72 sm:py-72 md:py-124">
				{#each data.body as item}
					<RoadmapQuarter
						quarter={item.primary.quarter}
						year={item.primary.year}
						state={item.primary.state}
						items={item.items} />
				{/each}

			</div>
		</div> -->
	</div>
</div>

<style>
	#wrapper {
		position: relative;
	}

	.node-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -10;
	}

	.text-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 15;
	}

	.hexagon-wrapper {
		cursor: pointer;
		-webkit-animation: out 2s;
	}

	.hexagon-wrapper:hover {
		position: relative;
		cursor: pointer;
		/* -webkit-animation: spin 1s alternate;
		-moz-animation: spin 1s alternate;
		animation: spin 1s alternate; */
		-webkit-animation: in 2s;
	}

	@-webkit-keyframes in {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@-webkit-keyframes out {
		0% {
			-webkit-transform: rotate(360deg);
		}
		100% {
			-webkit-transform: rotate(0deg);
		}
	}

	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(180deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(180deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}
	}
</style>
