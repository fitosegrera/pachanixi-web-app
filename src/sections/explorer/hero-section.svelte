<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';
	import Icon from '@iconify/svelte';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';

	//PORPS
	export let data;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
	};
</script>

<div id="wrapper" class="w-auto h-960 bg-primary-dark">
	<div id="img-wrapper" class="w-full h-full" />
	<div class="text-wrapper w-full h-auto pt-224">
		<Main>
			<div class="flex w-full h-32 justify-center">
				<Divider name="explorer-hero-section-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<div class="w-full h-full text-center space-y-16">
				<div class="flex justify-center items-center space-x-32 text-h5 text-primary-main">
					<Icon icon={data.icon_label} />
					<h5 class="text-h5 text-primary-main font-bold">{data.heading[0].text}</h5>
				</div>
				<h5 class="text-p1 gradient-text-primary-light font-bold">{data.subheading[0].text}</h5>
				<div class="w-ful text-p2 font-medium text-primary-light text-center pt-72">
					<p>{@html prismicH.asHTML(data.paragraph, null, htmlSerializer)}</p>
				</div>
			</div>
		</Main>
	</div>
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
		background-image: url('/assets/imgs/bg-texture.png');
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

	.text-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
</style>
