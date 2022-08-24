<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import * as prismicH from '@prismicio/helpers';

	//PROPS
	export let data, iconInitial, iconActive, id;
	// console.log(data, iconInitial, iconActive);

	let showContent = '';
	let iconLabel = iconInitial;

	const handleDropdown = (payload) => {
		showContent = payload === showContent ? '' : payload;
		if (payload === showContent) {
			iconLabel = iconActive;
		} else {
			iconLabel = iconInitial;
		}
	};

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-light">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light">${children}</p>`;
		}
		if (type === 'hyperlink') {
			return `<a href=${element.data.url} target="__blank" class="text-primary-main hover:text-secondary-main cursor-pointer font-bold">${children}</a>`;
		}
	};
</script>

<div>
	<div
		class="grid h-auto w-auto grow grid-cols-8 items-center border-b-4 border-solid border-primary-main sm:py-16 md:px-16 md:py-32">
		<div
			class="col-span-7 flex items-center justify-start font-medium text-primary-light sm:space-x-12 sm:text-p3 md:space-x-32 md:text-h7">
			<div class="h-auto w-48 font-bold text-primary-main">
				<p>{id + 1}.</p>
			</div>
			<div class="h-auto w-full">
				{@html prismicH.asHTML(data.question, null, htmlSerializer)}
			</div>
		</div>
		<div
			class="flex items-center justify-end font-medium text-primary-main sm:text-p1 md:text-h7">
			<div
				on:click={() => handleDropdown(data.answer[0].text)}
				class="cursor-pointer hover:text-primary-light">
				<Icon icon={iconLabel} />
			</div>
		</div>
	</div>
	{#if showContent === data.answer[0].text}
		<div
			transition:slide={{ duration: 400 }}
			class="border-b-4 border-solid border-primary-main px-16 text-primary-light sm:py-48 sm:text-p3 md:py-72 md:text-p2">
			{@html prismicH.asHTML(data.answer, null, htmlSerializer)}
		</div>
	{/if}
</div>
