<script>
	//LIBS
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	//PROPS
	export let metadata;

	//COMPONENTS
	import CloseButton from '../button/dark/lg/close.svelte';

	const dispatch = createEventDispatcher();

	const handleCloseClick = () => {
		dispatch('closeMetadata');
	};
</script>

<div
	transition:fly={{ x: 1920, opacity: 0.1 }}
	class="fixed top-0 left-0 z-50 h-screen w-full bg-primary-dark-alpha-variant backdrop-blur-md">
	<div class="mr-32 mt-16 flex items-center justify-end">
		<div on:click={handleCloseClick}>
			<CloseButton icon={'ant-design:close-square-outlined'} />
		</div>
	</div>
	<div class="grid grid-cols-2 gap-32 px-240 py-72 text-left">
		<div>
			<video width="auto" height="auto" autoplay muted loop>
				<source
					src={'https://ipfs.io/ipfs/' +
						metadata.files[0].src.split('ipfs://')[1]}
					type={metadata.files[0].mediaType} />
			</video>
		</div>
		<div>
			{#each Object.entries(metadata) as [key, value]}
				<div class="p-8 text-p4 text-primary-light">
					<p class="px-12 font-bold">
						{key.toLocaleUpperCase()}:
						<span class="px-4 font-light">{value}</span>
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
