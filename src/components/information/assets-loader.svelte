<script>
	//STORES
	import { img_seq_loading } from '../../stores/main';

	//PROPS
	export let totalAssets;
</script>

{#if $img_seq_loading <= totalAssets}
	<div
		id="asset-loader"
		class="flex h-auto w-full items-end justify-center bg-secondary-main">
		<div
			class="flex h-auto w-full justify-center space-x-16 bg-secondary-main px-16 py-16 opacity-90 ">
			<p class="text-center font-bold text-primary-main sm:text-p4 md:text-p3">
				CARGANDO: {$img_seq_loading} / {totalAssets}
			</p>
			<p
				class="text-center font-medium text-primary-main sm:text-p4 md:text-p3">
				IMÁGENES...
			</p>
		</div>
	</div>
{/if}

<style>
	#asset-loader {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		/* opacity: 0.9; */
	}
</style>
