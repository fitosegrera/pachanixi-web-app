<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//COMPONENTS
	import PrimarButton from '../../components/button/dark/lg/primary.svelte';

	//PROPS
	export let data, title;
</script>

<div id="wrapper" class="h-auto w-auto bg-primary-dark">
	<div id="img-wrapper" class="h-full w-full" />
	<div class="px-auto mb-96 h-auto w-full space-y-48">
		<div class="w-auto text-center">
			<div
				class="flex h-auto w-full flex-col items-center justify-center pt-148">
				<div
					class="mb-12 h-auto w-auto text-primary-main sm:text-h3 md:text-h2">
					<Icon icon="gg:loadbar-doc" />
				</div>
			</div>
			<div
				class="w-auto text-center font-bold text-primary-main sm:text-h7 md:text-h5 lg:text-h3">
				<h1>{title.toUpperCase()}</h1>
			</div>
			<p class="py-48 font-medium text-primary-light sm:text-p3 lg:text-p2">
				{data.paragraph[0].text}
			</p>
		</div>
		<div class="flex w-full justify-center">
			<div class="md:px-auto w-320 space-y-48 sm:px-16">
				{#each data.button as button}
					<div class="w-auto">
						<PrimarButton
							target={'__blank'}
							label={button.button_label}
							url={button.button_url} />
					</div>
				{/each}
			</div>
		</div>
	</div>
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
		mask-image: linear-gradient(to bottom, #02232b55, #02232b00);
		z-index: -10;
	}
</style>
