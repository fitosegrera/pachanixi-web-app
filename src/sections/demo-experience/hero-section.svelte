<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import * as prismicH from '@prismicio/helpers';

	//COMPONENTS
	import MainButton from '../../components/button/dark/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';
	import InfoButton from '../../components/button/dark/lg/info.svelte';

	//PORPS
	export let data;
	//console.log(data);

	let showDemoExperience = true;

	const closeDemoExperience = () => {
		showDemoExperience = false;
	};

	const openDemoExperience = () => {
		showDemoExperience = true;
	};

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="w-50 mx-auto text-p3 font-medium text-primary-light text-center">${children}</p>`;
		}
	};
</script>

<div class="relative bg-primary-dark h-screen">
	{#if !showDemoExperience}
		<div class="information w-full h-full bg-primary-dark-alpha-variant text-center">
			<div class="flex w-auto justify-center mt-96">
				<Divider name="demo-hero-section-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<h5 class="text-h5 font-bold text-primary-main mb-32">{data.primary.title1[0].text}</h5>
			{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
			<div
				class="flex items-center justify-center space-x-16 text-h5 text-primary-main-variant mt-32"
			>
				<Icon icon={data.primary.subtitle_icon_label} />
				<h6 class="text-h6 font-bold gradient-text-primary-light">
					{data.primary.subtitle[0].text}
				</h6>
			</div>
			<div class="mt-16">
				{#each data.items as item}
					{@html prismicH.asHTML(item.control, null, htmlSerializer)}
				{/each}
			</div>
			<div class="flex items-center justify-center space-x-64 mt-64">
				<div class="w-240">
					<a href="/">
						<MainButton label={data.primary.back_button_label} />
					</a>
				</div>
				<div class="w-296" on:click={openDemoExperience}>
					<MainButton label={data.primary.start_button_label} />
				</div>
			</div>
		</div>
	{:else}
		<div on:click={closeDemoExperience} class="info-button">
			<InfoButton icon={'ci:info-square-outline'} />
		</div>
	{/if}
	<iframe
		class="demo-experience"
		src="localhost:3333"
		title="Pachanixi demo experience"
	/>
</div>

<style>
	* {
		overflow: hidden;
	}

	.demo-experience {
		margin: 0;
		width: 100%;
		height: 1920px;
	}

	.information {
		position: absolute;
		left: 0;
		top: 0;
	}

	.close-button {
		position: absolute;
		top: 32px;
		right: 32px;
	}

	.info-button {
		position: absolute;
		bottom: 32px;
		right: 32px;
	}
</style>
