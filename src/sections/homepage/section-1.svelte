<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';
	import Saos from 'saos';

	//CONTAINERS
	import Main from '../../containers/margins.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light pb-32">${children}</p>`;
		}
	};
</script>

<div
	id="wrapper"
	class="h-auto w-auto bg-primary-dark text-center sm:pb-124 sm:pt-72">
	<div id="img-wrapper" class="h-full w-full" />
	<Main>
		<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div class="font-bold text-primary-main sm:text-h7 md:text-h5">
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
		<Saos animation={'from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div class="pt-48 font-medium text-primary-light sm:text-p3 md:text-p1">
				<p>
					{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
				</p>
			</div>
		</Saos>
		<Saos animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div class="flex w-auto justify-center sm:mt-32 md:mt-72">
				<PrimaryButton
					label={data.primary.button_label}
					url={data.primary.button_url}
					target={''} />
			</div>
		</Saos>
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
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#02232b00),
			to(#02232b44)
		);
		mask-image: linear-gradient(to bottom, #02232b00, #02232b44);
		z-index: -10;
	}
</style>
