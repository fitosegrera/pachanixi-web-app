<script>
	//COMPONENTS
	import Profile from '../../../interactive/profile.svelte';

	//PROPS
	export let data;
	//console.log(data);

	let showProfile = false;

	const openProfile = () => {
		showProfile = true;
	};

	const closeProfile = () => {
		showProfile = false;
	};
</script>

<div class="wrapper ">
	<div class="image-cropper mx-auto sm:h-240 sm:w-240 md:h-340 md:w-340">
		<img src={data.profile_picture.url} alt="" />
	</div>
	<div class="h-auto w-full">
		<div class="h-full text-center">
			<p class="mt-32 font-bold text-primary-main sm:text-p2 md:text-p1">
				{data.name[0].text}
			</p>
			<p class="pt-4 text-p3 font-medium text-primary-light">
				{data.rol[0].text}
			</p>
		</div>

		<div
			class="mx-auto mt-24 h-auto w-160 cursor-pointer p-16 text-primary-main hover:bg-primary-main hover:text-primary-dark">
			<p class="text-p3 font-bold" on:click={openProfile}>
				{data.button_label}
			</p>
		</div>
	</div>
	{#if showProfile}
		<Profile
			on:closeProfile={closeProfile}
			profile_picture={data.profile_picture.url}
			name={data.name[0].text}
			rol={data.rol[0].text}
			bio={data.bio[0].text}
			website_state={data.website_state}
			website_icon={data.website_icon}
			website_url={data.website_url.url}
			twitter_state={data.twitter_state}
			twitter_icon={data.twitter_icon}
			twitter_url={data.twitter_url.url}
			discord_state={data.discord_state}
			discord_icon={data.discord_icon}
			discord_url={data.discord_url}
			instagram_state={data.instagram_state}
			instagram_icon={data.instagram_icon}
			instagram_url={data.instagram_url.url}
			facebook_state={data.facebook_state}
			facebook_icon={data.facebook_icon}
			facebook_url={data.facebook_url.url} />
	{/if}
</div>

<style>
	.wrapper {
	}

	.image-cropper {
		/* position: relative; */
		overflow: hidden;
		border-radius: 50%;
	}

	img {
		margin: 0 auto;
		height: auto;
		width: auto;
	}
</style>
