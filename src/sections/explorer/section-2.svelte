<script>
	//CONTAINERS
	import Container from '../../containers/margins.svelte';

	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div class="h-full w-full">
	<Container>
		<div
			id="img-wrapper"
			class="mb-72 mt-32 w-auto sm:h-420 md:h-720 lg:h-960 xl:h-1120 2xl:h-1600"
			style={`background-image: url(${data.primary.section_2_image.url});`} />
	</Container>
</div>

<style>
	#img-wrapper {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		-webkit-background-size: contain;
		-moz-background-size: contain;
		-o-background-size: contain;
	}
</style>
