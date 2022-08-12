<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let icon;
</script>

<div
	class="cursor-pointer px-16 text-primary-main hover:text-primary-light sm:w-80 sm:text-h6 md:w-124 md:text-h5">
	<Icon {icon} />
</div>
