<script>
	//PROPS
	export let quarter;
	export let year;
	export let items;
	export let state;

	//console.log(state);

	let highlightColor;
	let borderColor;
	$: active = false;

	if (state === 'done') {
		highlightColor = 'primary-light';
		borderColor = 'primary-light';
		active = false;
	}
	if (state === 'active') {
		highlightColor = 'primary-main';
		borderColor = 'primary-main';
		active = true;
	}
	if (state === 'upcoming') {
		highlightColor = 'primary-main-variant';
		borderColor = 'primary-main-variant';
		active = false;
	}

	$: active_class = active
		? `border-r-8 border-solid border-${borderColor} text-right`
		: `border-r-8 border-solid border-${borderColor} text-right`;

	$: animated_h_class = active
		? 'animate-pulse font-bold text-primary-main'
		: 'font-bold';

	$: animated_p_class = active
		? 'animate-pulse font-medium text-primary-main'
		: 'font-medium';
</script>

<div class={`text-${highlightColor} w-full`}>
	<div class="grid w-full grid-cols-3 items-center">
		<div class={`${active_class} sm:px-24 md:px-48 sm:w-full`}>
			<h1 class={`${animated_h_class} sm:text-h7 md:text-h6 lg:text-h5`}>
				{quarter}
			</h1>
			<p class={`${animated_p_class} sm:text-p3 md:text-p2 lg:text-p1`}>
				{year}
			</p>
		</div>
		<div class="col-span-2 w-full">
			<ul
				class={`${animated_p_class} sm:text-p4 md:text-p2 lg:text-p1 sm:px-24 md:px-48 w-full`}>
				{#each items as item}
					<li class="py-4">{item.item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
