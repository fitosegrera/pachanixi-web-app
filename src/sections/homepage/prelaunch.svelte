<script>
	//LIBS
	import { onMount } from 'svelte';
	import Saos from 'saos';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Starfield from '../../components/sketch/starfield.svelte';

	//PORPS
	export let data;

	onMount(async () => {
		document.addEventListener('mousemove', parallax);
	});

	const parallax = (event) => {
		let vid = document.getElementById('nft');
		const vidPos = 3;
		const vidX = (window.innerWidth - event.pageX * vidPos) / 90;
		const vidY = (window.innerHeight - event.pageY * vidPos) / 90;
		vid.style.transform = `translateX(${vidX}px) translateY(${vidY}px)`;
	};
</script>

<div id="wrapper" class="wrapper h-auto w-auto sm:mb-72 md:mb-96 lg:mb-124">
	<!-- <div id="img-wrapper" class="h-full w-full" /> -->
	<div id="sketch-wrapper" class="h-full w-full">
		<Starfield startColor={'#000000'} endColor={'#10181A'} speed={'3'} />
	</div>
	<Main>
		<div class="h-auto w-full">
			<Saos
				once={true}
				animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div class="sm:pt-196 md:pt-264">
					<img
						src={data.background_image.url}
						alt={data.background_image.alt}
						class="w-full" />
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div
					class="mt-16 flex w-full items-center justify-center text-center font-bold text-primary-light sm:text-p3 md:text-p2 xl:text-p1">
					<h2>{data.section_title[0].text}</h2>
				</div>
			</Saos>
			<!-- <div class="w-full sm:mt-32 md:mt-88">
				<PrimaryButton label={data.button_label} url={data.button_url} />
			</div> -->

			<div class="flex h-auto w-auto justify-center sm:mt-32 md:mt-8">
				<video id="nft" width="90%" autoplay loop muted>
					<source src="/assets/vids/alpha/nft-4-alpha.webm" type="video/webm" />
				</video>
			</div>
		</div>
		<Saos
			once={true}
			animation={'slide-in-elliptic-top-fwd 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<p
				class="text-center font-medium text-primary-light sm:mt-32 sm:mb-48 sm:px-16 sm:text-p3 md:px-72 md:text-p2 lg:mt-0 lg:mb-72 lg:px-124 lg:text-p1 xl:px-224">
				{data.quote_paragraph[0].text}
			</p>
			<p
				class="text-center italic text-primary-light sm:px-16 sm:text-p4 md:text-p3 lg:px-124 lg:text-p3 xl:px-224">
				{data.author_paragraph[0].text}
			</p>
		</Saos>
	</Main>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: -10;
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
