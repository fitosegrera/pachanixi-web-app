<script>
	//LIBS
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	//COMPONENTS
	import CloseButton from '../../components/button/dark/lg/close.svelte';

	//PROPS
	export let quarter;
	console.log(quarter);

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('closeRoadmapQSlide');
	};
</script>

<div
	id="wrapper"
	class="h-screen w-full bg-primary-dark-alpha-variant py-72 backdrop-blur-lg"
	transition:fly={{ x: 1920, opacity: 1 }}>
	<div class="close-button-wrapper" on:click={handleClick}>
		<CloseButton icon={'ant-design:close-square-outlined'} />
	</div>
	<div
		class="flex items-center justify-center space-x-32 px-32 font-bold text-primary-main sm:text-h5 md:text-h3">
		<div>
			<h1>{quarter.q.toUpperCase()} / {quarter.year}</h1>
		</div>
	</div>
	<div
		class="lg:text-01 mt-72 space-y-16 font-medium text-primary-light sm:text-p3 md:text-p2">
		<ul
			class="flex list-disc flex-col justify-center sm:px-64 md:px-124 lg:px-224">
			{#each quarter.items as item}
				<li class="">
					{item.item}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	#wrapper {
		position: fixed;
		/* backdrop-filter: blur(1); */
		top: 0;
		left: 0;
		z-index: 100;
		overflow-y: scroll !important;
	}

	.close-button-wrapper {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
