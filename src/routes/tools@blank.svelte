<script>
	//COMPONENTS
	import Main from '../containers/margins.svelte';
</script>

<div class="my-72">
	<Main>
		<div class="text-center text-h5 font-bold text-primary-main">
			<h1>Nixi Labs Tools</h1>
		</div>
		<div
			class="mt-72 flex h-auto w-full items-center justify-center space-x-32">
			<div class="">
				<div class="flex h-auto w-full items-center justify-start space-x-32">
					<div class="h-96 w-96">
						<img src="/assets/imgs/other/profile-picture-bot.png" alt="" />
					</div>
					<div>
						<div class="text-p1 font-bold text-primary-main">
							<h2>NixiBot ALPHA</h2>
						</div>
						<div class="text-p2 font-bold text-primary-light">
							<h3>by Nixi Labs</h3>
						</div>
					</div>
				</div>
				<div class="my-32 text-p3 font-medium text-primary-light">
					<p>Discord bot for virification of cardano NFT through policy_id.</p>
				</div>
				<div class="space-y-16">
					<p class="text-p3 font-medium text-primary-light">
						<span class="font-bold text-primary-main">IMPORTANT: </span>Make
						sure you drag up the Nixi Labs role to the top of the roles
						heriarchy.
					</p>
					<div class="h-full w-full">
						<img src="/assets/imgs/other/roles-instructions.png" alt="" />
					</div>
				</div>
				<div class="mt-32">
					<a
						href="https://discord.com/api/oauth2/authorize?client_id=1030000016607154186&permissions=8&scope=bot%20applications.commands">
						<div class="w-50 border-4 border-primary-main">
							<div
								class="w-auto py-8 text-center text-p3 font-bold text-primary-main hover:bg-primary-main hover:text-primary-dark-variant">
								INSTALL BOT
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</Main>
</div>
