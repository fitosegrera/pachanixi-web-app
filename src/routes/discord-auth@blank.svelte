<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	//CONTAINERS
	import Main from '../containers/margins.svelte';

	onMount(() => {
		window.onload = () => {
			const fragment = new URLSearchParams(window.location.hash.slice(1));
			const [accessToken, tokenType] = [
				fragment.get('access_token'),
				fragment.get('token_type')
			];

			if (!accessToken) {
				window.location.href('/');
				return (document.getElementById('login').style.display = 'block');
			}
		};
	});
</script>

<div class="h-full w-full">
	<Main>
		<div class="flex h-screen w-full items-center justify-center">
			<div
				class="max-w-fit rounded-md border-4 border-primary-main px-32 py-16 text-p2 font-medium text-primary-main hover:bg-primary-main hover:text-primary-dark">
				<a
					class="flex items-center justify-center space-x-32"
					href="https://discord.com/api/oauth2/authorize?client_id=1030691657294811215&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fdiscord-auth&response_type=token&scope=identify">
					<Icon icon="fa-brands:discord" />
					<span class="">Login with Discord</span>
				</a>
			</div>
		</div>
	</Main>
</div>
