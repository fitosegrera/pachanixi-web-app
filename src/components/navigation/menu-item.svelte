<script>
	//PROPS
	export let label, url;
</script>

{#if label !== 'WHITEPAPER'}
	{#if label === 'INICIO' || label === 'HOME'}
		<a sveltekit:reload href={url}>
			<div
				class="w-full sm:text-h7 md:text-h6 mt-24 px-16 font-bold text-primary-main text-center hover:bg-primary-main cursor-pointer"
			>
				<h1 class="hover:text-primary-dark">{label}</h1>
			</div>
		</a>
	{:else}
		<a sveltekit:prefetch href={url}>
			<div
				class="w-full sm:text-h7 md:text-h6 mt-24 px-16 font-bold text-primary-main text-center hover:bg-primary-main cursor-pointer"
			>
				<h1 class="hover:text-primary-dark">{label}</h1>
			</div>
		</a>
	{/if}
{:else}
	<a href={url} target="__blank">
		<div
			class="w-full sm:text-h7 md:text-h6 px-16 mt-24 font-bold text-primary-main text-center hover:bg-primary-main cursor-pointer"
		>
			<h1 class="hover:text-primary-dark">{label}</h1>
		</div>
	</a>
{/if}
