<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let icon;
</script>

<div
	class="cursor-pointer p-16 text-h5 text-primary-main hover:text-primary-light sm:w-96 md:w-124">
	<Icon {icon} />
</div>
