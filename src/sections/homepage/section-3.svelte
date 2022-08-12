<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import NftCard from '../../components/card/dark/lg/nft.svelte';
	import Scroller from '../../components/information/scroller.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div id="wrapper" class="h-auto w-auto bg-primary-dark text-center">
	<div id="img-wrapper" class="h-full w-full" />
	<Main>
		<div class="pt-48 font-bold text-primary-main sm:text-h7 md:text-h5">
			<div class="flex h-auto w-full items-center justify-center">
				<Divider
					name="homepage-section-3-divider"
					w={'50'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div
			class="md:mt-56 grid h-auto w-full sm:mt-32 sm:grid-cols-1 sm:gap-32 md:grid-cols-2 xl:mt-88 xl:grid-cols-3 xl:gap-24 2xl:grid-cols-4">
			{#each data.items as item, i}
				<NftCard data={item} />
			{/each}
		</div>

		<div class="mt-72 flex w-auto justify-center">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={''} />
		</div>
	</Main>
	<div class="mt-96 h-auto w-full">
		<Scroller data={data.primary.scroller[0].text} />
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
			from(#02232b00),
			to(#02232b22)
		);
		mask-image: linear-gradient(to bottom, #02232b00, #02232b22);
		z-index: -10;
	}
</style>
