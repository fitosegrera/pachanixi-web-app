<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';

	//CONTAINERS
	import Container from '../../containers/margins.svelte';

	//COMPONENTS
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

<div id="wrapper" class="h-auto w-auto text-center">
	<Container>
		<div class="mt-72">
			<div class="flex h-auto w-full items-center justify-center">
				<Divider
					name="cosmovision-section-1-divider"
					w={'50'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<h5 class="font-bold text-primary-main sm:text-h7 md:text-h6 lg:text-h5">
				{data.primary.section_1_title[0].text}
			</h5>
			<p
				class="mt-64 text-justify font-medium text-primary-light sm:text-p3 md:text-p2">
				{@html prismicH.asHTML(
					data.primary.cosmovision_1,
					null,
					htmlSerializer
				)}
			</p>
		</div>
	</Container>
</div>
