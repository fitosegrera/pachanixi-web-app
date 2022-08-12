<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';

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
	class="h-auto w-auto bg-primary-dark pb-124 text-center sm:pt-148 md:pt-264">
	<Main>
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
		<div class="pt-48 font-medium text-primary-light sm:text-p3 md:text-p1">
			<!-- <p>{data.primary.paragraph[0].text}</p> -->
			<p>
				{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
			</p>
		</div>
		<div class="flex w-auto justify-center sm:mt-32 md:mt-72">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={''} />
		</div>
	</Main>
</div>

<style>
	#wrapper {
		z-index: 1;
	}
</style>
