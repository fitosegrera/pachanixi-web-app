<script>
	export let progress, label, t;

	const angle = 360 * progress;

	// Adapt the logic according to the approach
	let background = `radial-gradient(black 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, #10181A ${angle}deg 360deg),
    conic-gradient(#BDFF00, #BDFF00);`;

	$: cssVarStyles = `--background:${background}`;

	const mapRange = (number, inMin, inMax, outMin, outMax) => {
		console.log('NUMBER', number);
		let result =
			((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
		console.log('RESULT', result);
		return result;
	};
</script>

<div id="progress-circle" style={cssVarStyles}>
	<div
		class="flex h-full w-full items-center justify-center text-p4 font-black text-primary-main">
		<div>
			<p>{label}</p>
			<p>{t}</p>
		</div>
	</div>
</div>

<style>
	#progress-circle {
		background: var(--background);
		border-radius: 50%;
		width: 172px;
		height: 172px;
		transition: all 500ms ease-in;
		will-change: transform;
	}
</style>
