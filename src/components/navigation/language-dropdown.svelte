<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	//STORES
	import { locale, languages } from '../../stores/main';

	let dropIcon = 'fe:drop-down';
	let isDropped = false;

	const handleClick = () => {
		isDropped = !isDropped;

		if (isDropped) {
			dropIcon = 'fe:drop-up';
		} else {
			dropIcon = 'fe:drop-down';
		}
	};

	const changeLanguage = (lang) => {
		$locale = lang;
		handleClick();
	};
</script>

<div>
	<div class="ml-16 flex w-full items-center justify-start space-x-24">
		<div class="text-h6 text-primary-main">
			<Icon icon="ion:language" />
		</div>
		<div class="flex items-center">
			<div>
				<p class="text-h7 font-medium text-primary-main">
					{$locale.split('-')[0]}
				</p>
			</div>
			<div
				class="cursor-pointer text-h6 text-primary-main hover:text-primary-light"
				on:click={handleClick}>
				<Icon icon={dropIcon} />
			</div>
		</div>
	</div>
	{#if isDropped}
		<div class="fixed mx-100 h-auto w-116">
			{#each $languages as lang}
				<div
					class="cursor-pointer bg-primary-dark text-center text-p2 text-primary-main hover:bg-primary-main hover:text-primary-dark"
					on:click={changeLanguage(lang)}>
					<div on:click={goto($page.url.pathname)}>
						<p class="">{lang}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
