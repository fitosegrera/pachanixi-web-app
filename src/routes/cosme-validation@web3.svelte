<script>
	//LIBS
	import { onMount } from 'svelte';

	//STORES
	import {
		assetDataArr,
		walletConnected,
		mainAddress,
		walletState,
		stakeAddress
	} from '../stores/assetStore';

	//HELPERS
	import socket from '../helpers/socketio';

	//COMPONENTS
	import NavbarWeb3 from '../components/navigation/navbar-web3.svelte';
	import CardNftSimple from '../components/card/dark/lg/nft-simple.svelte';
	import PrimaryButton from '../components/button/dark/md/primary.svelte';

	//CONTAINERS
	import Main from '../containers/main.svelte';

	let discordData;
	let showVerificationButton = true;
	let showConfirmationMessage = false;
	let userNotFound = false;

	onMount(() => {
		const fragment = new URLSearchParams(window.location.hash.slice(1));
		const [accessToken, tokenType] = [
			fragment.get('access_token'),
			fragment.get('token_type')
		];

		if (!accessToken) {
			window.location.href('/');
			return (document.getElementById('login').style.display = 'block');
		}

		fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`
			}
		})
			.then((result) => result.json())
			.then((response) => {
				console.log(response);
				discordData = response;
				const { username, discriminator, avatar, id } = response;
				//set the welcome username string
				console.log(username, discriminator, avatar, id);
				document.getElementById(
					'name'
				).innerText = ` ${username}#${discriminator}`;

				//set the avatar image by constructing a url to access discord's cdn
				document.getElementById(
					'avatar'
				).src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;
			})
			.catch(console.error);
	});

	const handleClick = async () => {
		await socket.connect();
		await socket.emit('discordData', discordData);
		console.log(discordData);
	};

	socket.on('confirmation', () => {
		showConfirmationMessage = true;
		showVerificationButton = false;
	});

	socket.on('userNotFound', () => {
		userNotFound = true;
	});
</script>

<NavbarWeb3 />
<div class="relative">
	<Main>
		<div class="space-y-32 py-124">
			<div
				class="mt-3 space-x-16 space-y-16 text-p2 font-bold text-primary-main">
				<div class="flex justify-center">
					<img
						src=""
						id="avatar"
						class="mr-3 h-96 w-96 rounded-full border-4 border-primary-main" />
				</div>
				<div class="flex justify-center" id="name" />
			</div>
			<div class="space-y-8 text-center text-p3 font-bold text-primary-light">
				<p>{$walletState}</p>
				<p class="text-p4 font-medium">{$mainAddress}</p>
				<p class="text-p4 font-medium">{$stakeAddress}</p>
			</div>
			<div class="flex items-center justify-center space-x-32">
				{#each $assetDataArr as asset}
					<CardNftSimple {asset} />
				{/each}
			</div>
			{#if $assetDataArr.length > 0}
				{#if showVerificationButton}
					<div class="flex w-full items-center justify-center pt-16">
						<div on:click={handleClick}>
							<PrimaryButton label={'Validate Asset(s)'} url={''} />
						</div>
					</div>
				{/if}
				{#if showConfirmationMessage}
					<div
						class="w-full space-y-16 pt-16 text-center text-p3 text-primary-light">
						<h2 class="my-16 text-p2 font-bold text-primary-main">Success!</h2>
						<p>
							You are now part of the <span class="font-bold text-primary-main"
								>"Council of Sacred Members" (COSME)</span>
							of Pachanixi! You have been assigned the role
							<span class="font-bold text-primary-main">COSME</span>
							in our Discord server and have access now to unique and private #channels.
							Please check your Discord user within Pachanixi's server and make sure
							the role
							<span class="font-bold text-primary-main">COSME</span> is on your profile.
						</p>
						<p>
							If you DO NOT see the role or experience any technical issues,
							please contact <span class="font-bold text-primary-main"
								>TechnoShaman#7010</span> in our Discord community.
						</p>
					</div>
				{/if}
			{/if}
			{#if userNotFound}
				<div
					class="mx-auto w-75 space-y-16 pt-16 text-center text-p3 text-primary-light">
					<h2 class="my-16 text-p2 font-bold text-primary-main">😔OOPS...</h2>
					<p>
						It seems you are not a member of Pachanixi's Discord server. Please
						join <a
							class="font-bold text-primary-main hover:text-secondary-main"
							href="https://discord.gg/kjQQZZ38vA">HERE</a>
						and come back to verify your Genesis Pass NFT. Please contact
						<span class="font-bold text-primary-main">TechnoShaman#7010</span> in
						our Discord community if you have any questions.
					</p>
				</div>
			{/if}
		</div>
	</Main>
</div>
