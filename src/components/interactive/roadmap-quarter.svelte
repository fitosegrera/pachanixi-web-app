<script>
	//LIBS
	import { createEventDispatcher } from 'svelte';

	//COMPONENTS
	import Hexagon from '../information/hexagon.svelte';
	import Node from '../sketch/node.svelte';

	//PROPS
	export let quarter;
	//console.log(quarter);

	let qClicked = false;

	const dispatch = createEventDispatcher();

	const qClickHandler = () => {
		if (qClicked) {
			return;
		} else {
			qClicked = true;

			setTimeout(() => {
				qClicked = false;
			}, 200);

			dispatch('qSlide', {
				q: quarter.primary.quarter,
				year: quarter.primary.year,
				items: quarter.items
			});
		}

		// console.log(q, year);
	};
</script>

<div
	id="wrapper"
	on:click={() => qClickHandler(quarter.q, quarter.year)}
	class="q-wrapper font-bold text-primary-main sm:text-h7 md:text-h3">
	<div class="hexagon-wrapper px-auto relative">
		<div class="node-wrapper">
			<div
				class="text-wrapper flex h-full w-full flex-col items-center justify-center">
				<div>
					<h2 class="text-center text-p1 font-bold text-primary-main">
						{quarter.primary.quarter.toUpperCase()}
					</h2>
				</div>
				<div>
					<h2 class="text-center text-p2 font-bold text-primary-light">
						{quarter.primary.year}
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

	.q-wrapper {
		cursor: pointer;
		-webkit-animation: out 2s;
	}

	.q-wrapper:hover {
		position: relative;
		cursor: pointer;
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
</style>
