<script>
	//PROPS
	export let label, url;
</script>

{#if label !== 'WHITEPAPER'}
	{#if label === 'INICIO' || label === 'HOME'}
		<a sveltekit:prefetch href={url}>
			<div
				class="mt-8 w-full cursor-pointer px-16 text-center font-bold text-primary-main hover:bg-primary-main sm:text-h7 md:text-h5">
				<h1 class="hover:text-primary-dark">{label}</h1>
			</div>
		</a>
	{:else}
		<a sveltekit:prefetch href={url}>
			<div
				class="mt-8 w-full cursor-pointer px-16 text-center font-bold text-primary-main hover:bg-primary-main sm:text-h7 md:text-h5">
				<h1 class="hover:text-primary-dark">{label}</h1>
			</div>
		</a>
	{/if}
{:else}
	<a sveltekit:prefetch href={url}>
		<div
			class="mt-8 w-full cursor-pointer px-16 text-center font-bold text-primary-main hover:bg-primary-main sm:text-h7 md:text-h5">
			<h1 class="hover:text-primary-dark">{label}</h1>
		</div>
	</a>
{/if}
