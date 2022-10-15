<script>
	//LIBS
	import Icon from '@iconify/svelte';
</script>

<div
	class="h-auto max-w-fit cursor-pointer rounded-md border-4 border-primary-main text-p3 font-bold text-primary-main hover:bg-primary-main hover:text-primary-dark">
	<a
		id="login"
		class="flex h-full w-full items-center justify-center space-x-32 px-32 py-16"
		href="https://discord.com/api/oauth2/authorize?client_id=1030691657294811215&redirect_uri=http%3A%2F%2Fpachanixi.com%2Fcosme-validation&response_type=token&scope=identify">
		<Icon icon="fa-brands:discord" />
		<span class="">Login with Discord</span>
	</a>
</div>
