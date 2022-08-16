<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let icon, url, name, active;
	// console.log(icon);
</script>

<div class="cursor-pointer hover:text-primary-light">
	<a href={url} target="__blank">
		<Icon {icon} />
	</a>
</div>
