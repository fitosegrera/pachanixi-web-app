<script>
	//PROPS
	export let images;
</script>

<div
	class="my-48 grid h-auto w-full items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each images as img}
		<div id="img-wrapper" style={`background-image: url(${img.image.url});`} />
	{/each}
</div>

<style>
	#img-wrapper {
		width: 100%;
		height: 720px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
