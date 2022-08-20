<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';

	//PORPS
	export let data;
</script>

<div id="wrapper" class="h-auto w-auto bg-primary-dark">
	<div id="img-wrapper" class="h-full w-full" />
	<Main>
		<div class="h-auto w-full">
			<div class="mt-160">
				<img
					src={data.primary.background_image.url}
					alt={data.primary.background_image.alt}
					class="w-full" />
			</div>
			<div
				class="mt-32 flex w-full items-center justify-center text-center font-bold text-primary-light sm:text-p3 md:text-p2 xl:text-p1">
				<h2>{data.primary.paragraph[0].text}</h2>
			</div>
			<div class="mt-88 flex w-auto justify-center">
				<PrimaryButton
					label={data.primary.button_label}
					url={data.primary.button_url}
					target={'__blank'} />
			</div>

			<div class="mt-96 flex h-auto w-auto justify-center">
				<video width="99%" autoplay loop muted>
					<source src="/assets/vids/alpha/nft-4-alpha.webm" type="video/webm" />
				</video>
			</div>
		</div>
	</Main>
</div>

<style>
	* {
		overflow: hidden;
	}

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

	video::-internal-media-controls-overlay-cast-button {
		display: none;
	}
</style>
