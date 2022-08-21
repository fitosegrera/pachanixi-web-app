<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import * as prismicH from '@prismicio/helpers';
	import { onMount } from 'svelte';

	//STORES
	import {
		nixigarden_url,
		window_width,
		is_mobile_view,
		break_point
	} from '../../stores/main';

	//HELPERS
	import { detectMobileView } from '../../helpers/mobileViewDetect';

	//COMPONENTS
	import MainButton from '../../components/button/dark/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';
	import InfoButton from '../../components/button/dark/lg/info.svelte';

	//PORPS
	export let data;
	//console.log(data);

	let showDemoExperience = true;
	let showMobileWarning = true;

	const closeDemoExperience = () => {
		showDemoExperience = false;
	};

	const openDemoExperience = () => {
		showDemoExperience = true;
		showMobileWarning = false;
		console.log(showMobileWarning);
	};

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="w-full sm:px-16 md:px-32 mx-auto sm:text-p3 md:text-p2 font-medium text-primary-light text-center">${children}</p>`;
		}
	};

	onMount(async () => {
		$is_mobile_view = detectMobileView($window_width, $break_point);
	});
</script>

<svelte:window bind:innerWidth={$window_width} />

<div class="relative h-screen bg-primary-dark">
	{#if !showDemoExperience}
		<div
			class="information h-full w-full bg-primary-dark-alpha-variant text-center">
			<div class="flex w-auto justify-center sm:mt-32 md:mt-72">
				<Divider
					name="demo-hero-section-divider"
					w={'420'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<h5 class="mb-32 font-bold text-primary-main sm:text-h7 md:text-h5">
				{data.primary.title1[0].text}
			</h5>
			{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
			<div
				class="mt-32 flex items-center justify-center space-x-16 text-primary-main sm:text-h6 md:text-h5">
				{#if !$is_mobile_view}
					<Icon icon={data.primary.subtitle_icon_label} />
				{/if}
				<h6 class="gradient-text-primary-light font-bold sm:text-p2 md:text-h6">
					{data.primary.subtitle[0].text}
				</h6>
			</div>
			<div class="mt-16">
				{#each data.items as item}
					{@html prismicH.asHTML(item.control, null, htmlSerializer)}
				{/each}
			</div>
			<div
				class="flex items-center justify-center px-8 sm:mt-32 sm:space-x-16 md:mt-64 md:space-x-64">
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
		<div
			on:click={closeDemoExperience}
			class="info-button sm:bottom-16 sm:right-16 md:right-32 md:bottom-32">
			<InfoButton icon={'ci:info-square-outline'} />
		</div>
	{/if}
	{#if $is_mobile_view}
		<div
			class="warning h-screen w-full bg-primary-dark-alpha-variant text-justify text-p3 text-primary-light sm:p-32 md:p-72">
			<div>
				<div class="flex w-auto justify-center">
					<Divider
						name="demo-hero-section-divider"
						w={'420'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h1
					class="mb-32 text-center font-bold text-primary-main sm:text-p1 md:text-h6">
					{data.primary.warning_title}
				</h1>
			</div>
			<div>
				<p class="text-center">
					{data.primary.warning_paragraph}
				</p>
			</div>
			<div class="mt-48">
				<a href="/">
					<MainButton label={data.primary.cancel_button_label} />
				</a>
			</div>
		</div>
	{:else}
		<iframe
			class="demo-experience"
			src={$nixigarden_url}
			title="Pachanixi demo experience" />
	{/if}
	<!-- {#if $is_mobile_view && showMobileWarning}
		<div
			class="warning h-screen w-full bg-primary-dark-alpha-variant text-justify text-p3 text-primary-light sm:p-32 md:p-72">
			<div>
				<div class="flex w-auto justify-center">
					<Divider
						name="demo-hero-section-divider"
						w={'420'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h1
					class="mb-32 text-center font-bold text-primary-main sm:text-p1 md:text-h6">
					{data.primary.warning_title}
				</h1>
			</div>
			<div>
				<p>
					{data.primary.warning_paragraph}
				</p>
			</div>
			<div class="mt-48">
				<a href="/">
					<MainButton label={data.primary.cancel_button_label} />
				</a>
			</div>
			<div class="mt-32" on:click={openDemoExperience}>
				<MainButton label={data.primary.ok_button_label} />
			</div>
		</div>
	{/if}
	<iframe
		class="demo-experience"
		src={$nixigarden_url}
		title="Pachanixi demo experience" /> -->
</div>

<style>
	.demo-experience {
		margin: 0;
		width: 100%;
		height: 1920px;
	}

	.information {
		position: fixed;
		left: 0;
		top: 0;
		overflow-y: scroll;
	}

	.warning {
		position: fixed;
		overflow-y: scroll;
	}

	.info-button {
		position: absolute;
	}
</style>
