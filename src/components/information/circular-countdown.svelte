<script>
	//LIBS
	import { onMount } from 'svelte';

	//COMPONENTS
	import Node from '../../components/sketch/node.svelte';

	//PROPS
	export let progress, label, t, limit, orbits;

	$: angle = 0;

	$: getProgress = () => {
		progress = mapRange(timeLeft, 0, limit, 0.0, 1.0);
		angle = 360 * progress;

		return `radial-gradient(black 50%, transparent 50%),
    		conic-gradient(transparent 0deg ${angle}deg, #111111 ${angle}deg 360deg),
    		conic-gradient(#BDFF00, #BDFF00);`;
	};

	$: timeLeft = t;
	$: background = getProgress();

	const mapRange = (number, inMin, inMax, outMin, outMax) => {
		// /console.log('NUMBER', number);
		let result =
			((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
		//console.log('RESULT', result);
		return result;
	};

	onMount(() => {
		getProgress();
	});

	$: cssVarStyles = `--background:${background}`;
</script>

<div
	id="progress-circle"
	class="flex h-224 w-224 items-center justify-center rounded-full"
	style={cssVarStyles}>
	<div class="">
		<div id="sketch-wrapper" class="h-full w-full">
			<Node
				canvasMargin={48}
				orbitMargin={32}
				w={224}
				h={224}
				bgColor={'#000000'}
				orbitColor={'#DBFF7344'}
				planetColor={'#BDFF00'}
				{orbits} />
		</div>
		<div
			id="text-wrapper"
			class="text-center text-p4 font-black text-primary-light">
			<p>{label}</p>
			<p>{timeLeft}</p>
		</div>
	</div>
</div>

<style>
	#progress-circle {
		position: relative;
		background: var(--background);
		transition: all 500ms ease-in;
		will-change: transform;
		z-index: 20;
	}

	/* #sketch-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -10;
	} */

	#text-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
