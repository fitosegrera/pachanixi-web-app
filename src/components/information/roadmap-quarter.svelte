<script>
	//PROPS
	export let quarter;
	export let year;
	export let items;
	export let state;

	let highlightColor;
	let active = false;

	$: active_class = active
		? 'highlight border-r-8 border-solid border-primary-main text-center'
		: 'highlight border-r-8 border-solid border-primary-light text-center';

	$: animated_h_class = active
		? 'animate-pulse text-h5 font-bold text-primary-main px-48'
		: 'text-h5 font-bold  px-48';

	$: animated_p_class = active
		? 'animate-pulse text-p1 font-medium text-primary-main px-48'
		: 'text-p1 font-medium px-48';

	if (state === 'done') {
		highlightColor = 'primary-light';
	} else if (state === 'active') {
		highlightColor = 'primary-main';
		active = true;
	} else if (state === 'upcoming') {
		highlightColor = 'primary-light-alpha';
	}
</script>

<div class={`text-${highlightColor}`}>
	<div class="flex items-center">
		<div class={`${active_class} w-224`}>
			<h1 class={animated_h_class}>{quarter}</h1>
			<p class={animated_p_class}>{year}</p>
		</div>
		<ul class={animated_p_class}>
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.highlight {
		z-index: 10;
	}
</style>
