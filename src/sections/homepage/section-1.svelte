<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';
	import Saos from 'saos';
	import { onMount } from 'svelte';

	//CONTAINERS
	import Main from '../../containers/margins.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';
	import HighlightsSection from './highlights-section.svelte';
	import GenesisPassSection from './genesis-pass-section.svelte';

	//PROPS
	export let data, highlightData, genesisPassData;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light pb-32">${children}</p>`;
		}
	};

	onMount(async () => {
		document.addEventListener('mousemove', parallax);
	});

	const parallax = (event) => {
		let img = document.getElementById('img-wrapper');
		const imgPos = 2;
		const imgX = (window.innerWidth - event.pageX * imgPos) / 130;
		const imgY = (window.innerHeight - event.pageY * imgPos) / 90;
		img.style.transform = `translateX(${imgX}px) translateY(${imgY}px)`;
	};
</script>

<div id="wrapper" class="h-auto w-auto bg-primary-dark text-center sm:pt-72">
	<div id="img-wrapper" class="h-full w-full" />
	<div class="my-160">
		<GenesisPassSection data={genesisPassData} />
	</div>
	<Main>
		<div id="cosmovision">
			<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div class="font-bold text-primary-main sm:text-h7 md:text-h3">
					<div class="flex h-auto w-full items-center justify-center">
						<Divider
							name="homepage-section-1-divider"
							w={'50'}
							h={'32'}
							pixCol={'#BDFF00'} />
					</div>
					<h5>{data.primary.title[0].text}</h5>
				</div>
			</Saos>
			<Saos
				animation={'from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div class="pt-48 font-medium text-primary-light sm:text-p3 md:text-p1">
					<p>
						{@html prismicH.asHTML(
							data.primary.paragraph,
							null,
							htmlSerializer
						)}
					</p>
				</div>
			</Saos>
			<Saos animation={'fade-in 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div class="flex w-auto justify-center sm:mt-32 md:mt-72">
					<PrimaryButton
						label={data.primary.button_label}
						url={data.primary.button_url}
						target={''} />
				</div>
			</Saos>
			<div class="py-148">
				<HighlightsSection data={highlightData} />
			</div>
		</div>
	</Main>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: 1;
	}

	#img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('/assets/imgs/bg-grabado-1.jpg');
		box-shadow: 55px 55px 80px 10px #02232b inset,
			-25px -55px 50px 80px #02232b inset;
		background-position: bottom;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#10181a11),
			to(#10181a22)
		);
		mask-image: linear-gradient(to bottom, #10181a11, #10181a22, #10181a00);
		z-index: -10;
	}
</style>
