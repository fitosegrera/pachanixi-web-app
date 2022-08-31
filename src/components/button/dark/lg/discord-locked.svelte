<script>
	//COMPONENTS
	import DiscordFillLockedIcon from '../../../extra-icons/dark/lg/discord-fill-locked.svelte';

	//PROPS
	export let height;
</script>

<div class="h-auto w-auto cursor-pointer hover:text-primary-main">
	<a href="">
		<DiscordFillLockedIcon fill={'#F6FFFA'} stroke={'#02232B'} {height} />
	</a>
</div>
