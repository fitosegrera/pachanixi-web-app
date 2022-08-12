<script>
	//PROPS
	export let label;
	export let url;
	export let target;
</script>

<a sveltekit:prefetch sveltekit:reload href={url} alt={label} {target}>
	<div
		class="flex h-96 w-auto items-center justify-center border-8 border-primary-main py-32 text-center font-bold text-primary-main hover:cursor-pointer hover:bg-primary-main hover:text-primary-dark sm:px-24 sm:text-p2 md:px-32 md:text-p1">
		<p>{label}</p>
	</div>
</a>
