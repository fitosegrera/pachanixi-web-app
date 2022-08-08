<script>
	//PROPS
	export let label;
	export let url;
	export let target;
</script>

<a sveltekit:prefetch href={url} alt={label} {target}>
	<div
		class="flex items-center text-center justify-center md:text-p1 sm:text-p2 text-primary-main font-bold h-96 w-auto border-8 border-primary-main md:px-32 sm:px-24 py-32 hover:text-primary-dark hover:bg-primary-main hover:cursor-pointer"
	>
		<p>{label}</p>
	</div>
</a>
