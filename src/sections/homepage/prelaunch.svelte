<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Starfield from '../../components/sketch/starfield.svelte';

	//PORPS
	export let data;
	//console.log(data);
</script>

<div id="wrapper" class="h-auto w-auto sm:mb-72 md:mb-96 lg:mb-124">
	<!-- <div id="img-wrapper" class="h-full w-full" /> -->
	<div id="sketch-wrapper" class="h-full w-full">
		<Starfield startColor={'#000000'} endColor={'#02232B'} speed={'3'} />
	</div>
	<Main>
		<div class="h-auto w-full">
			<div class="sm:pt-124 md:pt-160">
				<img
					src={data.background_image.url}
					alt={data.background_image.alt}
					class="w-full" />
			</div>
			<div
				class="mt-16 flex w-full items-center justify-center text-center font-bold text-primary-light sm:text-p3 md:text-p2 xl:text-p1">
				<h2>{data.section_title[0].text}</h2>
			</div>
			<!-- <div class="w-full sm:mt-32 md:mt-88">
				<PrimaryButton label={data.button_label} url={data.button_url} />
			</div> -->

			<div class="flex h-auto w-auto justify-center sm:mt-32 md:mt-8">
				<video width="99%" autoplay loop muted>
					<source src="/assets/vids/alpha/hero-alpha.webm" type="video/webm" />
				</video>
			</div>
		</div>
		<div class="">
			<p
				class="text-center font-bold text-primary-light sm:mt-32 sm:mb-48 sm:px-16 sm:text-p3 md:px-72 md:text-p2 lg:mt-0 lg:mb-72 lg:px-124 lg:text-p1 xl:px-224">
				{data.quote_paragraph[0].text}
			</p>
			<p
				class="text-center font-semibold text-primary-main sm:px-16 sm:text-p4 md:text-p3 lg:px-124 lg:text-p2 xl:px-224">
				{data.author_paragraph[0].text}
			</p>
		</div>
	</Main>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: 10;
		background: linear-gradient(#02232b, #000000);
	}

	#sketch-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -100;
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
