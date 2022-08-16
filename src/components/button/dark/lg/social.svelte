<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let icon, url, name, active;
</script>

<div class="h-auto w-auto cursor-pointer hover:text-primary-main">
	<a href={url} target="__blank">
		<Icon {icon} />
	</a>
</div>
