<script>
	//CONTAINERS
	import Margins from '../../containers/margins.svelte';

	//COMPONENTS
	import Faq from '../../components/information/faq.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data, title;
	// console.log(data);
</script>

<div id="wrapper" class="h-full w-full">
	<div id="img-wrapper" class="h-full w-full" />
	<Margins>
		<div class="h-auto w-full sm:pb-124 md:pb-196 md:pt-72">
			<div class="flex h-auto w-full items-center justify-center">
				<Divider
					name="faq-section-divider"
					w={'50'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<div class="mb-72 flex items-center justify-center">
				<h1 class="font-bold text-primary-main sm:text-h7 md:text-h5">
					{title}
				</h1>
			</div>
			<div class="sm:space-y-24 md:space-y-72">
				{#each data as item}
					<Faq
						id={item.id}
						data={item.faq}
						iconInitial={'fe:drop-down'}
						iconActive={'fe:drop-up'} />
				{/each}
			</div>
		</div>
	</Margins>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: 10;
	}

	#img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('/assets/imgs/bg-grabado-2.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#02232b00),
			to(#02232b66)
		);
		mask-image: linear-gradient(to bottom, #02232b00, #02232b66);
		z-index: -10;
	}
</style>
