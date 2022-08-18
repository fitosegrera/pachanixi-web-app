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

<div class="relative h-screen bg-primary-dark">
	{#if !showDemoExperience}
		<div
			class="information h-full w-full bg-primary-dark-alpha-variant text-center">
			<div class="mt-96 flex w-auto justify-center">
				<Divider
					name="demo-hero-section-divider"
					w={'420'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<h5 class="mb-32 text-h5 font-bold text-primary-main">
				{data.primary.title1[0].text}
			</h5>
			{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
			<div
				class="mt-32 flex items-center justify-center space-x-16 text-h5 text-primary-main-variant">
				<Icon icon={data.primary.subtitle_icon_label} />
				<h6 class="gradient-text-primary-light text-h6 font-bold">
					{data.primary.subtitle[0].text}
				</h6>
			</div>
			<div class="mt-16">
				{#each data.items as item}
					{@html prismicH.asHTML(item.control, null, htmlSerializer)}
				{/each}
			</div>
			<div class="mt-64 flex items-center justify-center space-x-64">
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
		src="http://50.116.40.214"
		title="Pachanixi demo experience" />
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
