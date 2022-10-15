<script>
	//COMPONENTS
	import DiscordLoginButton from '../components/button/dark/lg/discord-login.svelte';

	//CONTAINERS
</script>

<div id="dicord-auth" class="h-screen w-full">
	<div
		class="flex h-full w-full flex-col justify-center space-y-32 self-center">
		<div class="mx-auto w-75 space-y-16 text-center">
			<h1 class="text-p1 font-bold text-primary-main">WELCOME TECHNOSHAMAN!</h1>
			<p class="text-p3 text-primary-light">
				You have arrived to Pachanixi's Genesis Pass holders portal. Here you
				will be able to verify your NFTs and unlock the full potential of being
				an early adopter within our community. Please login with your Discord
				account using the button bellow.
			</p>
		</div>
		<div class="flex justify-center">
			<DiscordLoginButton />
		</div>
	</div>
</div>
