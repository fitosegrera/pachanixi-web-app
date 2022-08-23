<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import * as prismicH from '@prismicio/helpers';

	//PROPS
	export let data;

	let showContent = '';

	const handleDropdown = (payload) => {
		showContent = payload === showContent ? '' : payload;
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

<div class="space-y-72">
	{#each data as faq, i}
		<div>
			<div
				class="grid h-auto w-auto grow grid-cols-8 items-center border-b-4 border-solid border-primary-main px-16 py-16">
				<div
					class="col-span-7 flex items-center justify-start space-x-32 text-h7 font-medium text-primary-light">
					<div class="h-auto w-48 font-bold text-primary-main">
						<p>{i + 1}.</p>
					</div>
					<div class="h-auto w-full">
						{@html prismicH.asHTML(faq.question, null, htmlSerializer)}
					</div>
				</div>
				<div
					class="flex items-center justify-end text-h7 font-medium text-primary-main">
					<div
						on:click={() => handleDropdown(faq.answer[0].text)}
						class="cursor-pointer hover:text-primary-light">
						{#if showContent}
							<Icon icon="fe:drop-up" />
						{:else}
							<Icon icon="fe:drop-down" />
						{/if}
					</div>
				</div>
			</div>
			{#if showContent === faq.answer[0].text}
				<div
					transition:slide={{ duration: 400 }}
					class="border-b-4 border-solid border-primary-main px-16 py-72 text-p2 text-primary-light">
					{@html prismicH.asHTML(faq.answer, null, htmlSerializer)}
				</div>
			{/if}
		</div>
	{/each}
</div>
