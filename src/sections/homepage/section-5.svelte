<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import TeamCard from '../../components/card/dark/lg/team.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div id="wrapper" class="w-auto h-auto bg-primary-dark text-center pb-112">
	<div id="img-wrapper" class="w-full h-full" />
	<Main>
		<div class="text-h5 text-primary-main font-bold">
			<div class="flex w-auto justify-center pt-32">
				<Divider name="section-5-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div class="flex justify-center mt-88 space-x-72">
			{#each data.items as item, i}
				<TeamCard data={item} />
			{/each}
		</div>
	</Main>
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
		background-image: url('/assets/imgs/bg-texture.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#02232b22),
			to(#02232b00)
		);
		mask-image: linear-gradient(to bottom, #02232b22, #02232b00);
		z-index: -10;
	}
</style>
