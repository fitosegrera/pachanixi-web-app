<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

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

<div id="wrapper" class="w-auto h-auto pb-124 text-center">
	<Main>
		<div class="text-h5 text-primary-main font-bold pt-124">
			<div class="flex w-auto justify-center">
				<Divider name="mint-section-1-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.section_1_title[0].text}</h5>
		</div>
		<div class="text-p2 text-primary-light font-regular pt-48">
			<p>{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}</p>
		</div>
		<div class="flex w-auto justify-center mt-72">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={'__blank'}
			/>
		</div>
	</Main>
</div>

<style>
	#wrapper {
		z-index: 1;
		background-image: linear-gradient(180deg, #000000, 40%, #02232b);
	}
</style>
