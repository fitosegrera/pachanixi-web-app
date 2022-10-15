<script>
	//COMPONENTS
	import NftMetadata from '../../../information/nft-metadata.svelte';

	//PROPS
	export let asset;

	let showMetadata = false;

	const handleMetadataClick = () => {
		showMetadata = !showMetadata;
	};
</script>

{#if showMetadata}
	<NftMetadata metadata={asset} on:closeMetadata={handleMetadataClick} />
{/if}

<div class="h-auto w-240 rounded-md bg-primary-dark-alpha p-4 shadow-2xl">
	{#if asset.files[0].mediaType === 'video/mp4'}
		<video width="auto" height="auto" autoplay muted loop>
			<source
				src={'https://ipfs.io/ipfs/' + asset.files[0].src.split('ipfs://')[1]}
				type={asset.files[0].mediaType} />
		</video>
	{:else}
		<div id="img-wrapper" />
		<img
			width="auto"
			height="auto"
			src={'https://ipfs.io/ipfs/' + asset.image.split('ipfs://')[1]}
			alt="" />
	{/if}
	<div class="h-2 bg-primary-main" />
	<div class="mt-8">
		<div class="flex w-full flex-col text-center">
			<div class="my-8">
				<p class="px-8 text-p4 font-bold text-primary-light">
					{asset.name}
				</p>
			</div>
			<div class="my-16 flex items-center justify-center">
				<!-- <div class="">
					<p class="px-8 text-p4 text-primary-light">
						<span class="font-bold">Author: </span>{asset.designBy}
					</p>
				</div> -->
				<div class="">
					<div
						class="cursor-pointer px-8 text-p4 font-bold text-primary-main hover:text-secondary-main"
						on:click={() => handleMetadataClick()}>
						Metadata
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
