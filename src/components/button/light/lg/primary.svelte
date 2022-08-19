<script>
	//PROPS
	export let label;
	export let url;
	export let target;
</script>

<a sveltekit:prefetch href={url} alt={label} {target}>
	<div
		class="flex h-96 w-auto items-center justify-center border-8 border-primary-dark px-32 py-32 text-lg font-bold text-primary-dark hover:cursor-pointer hover:bg-primary-dark hover:text-primary-main">
		<p>{label}</p>
	</div>
</a>
