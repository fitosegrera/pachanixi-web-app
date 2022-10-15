<script>
	//PROPS
	export let label;
	export let url;
	export let target;
</script>

<a sveltekit:prefetch href={url} alt={label} {target}>
	<div
		class="flex h-48 min-w-fit items-center justify-center border-4 border-primary-main py-32 text-center font-bold text-primary-main hover:cursor-pointer hover:bg-primary-main hover:text-primary-dark sm:px-24 sm:text-p4 md:px-32 md:text-p3">
		<p>{label}</p>
	</div>
</a>
