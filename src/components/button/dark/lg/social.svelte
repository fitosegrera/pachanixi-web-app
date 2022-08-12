<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let icon, url, name, active;
</script>

<div class="cursor-pointer hover:text-primary-main">
	{#if active}
		<a href={url} target="__blank">
			<Icon {icon} />
		</a>
	{/if}
</div>
