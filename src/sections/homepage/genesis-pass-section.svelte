<script>
	//LIBS
	import Saos from 'saos';
	import * as prismicH from '@prismicio/helpers';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';

	//CONTAINER
	// import Main from '../../containers/margins.svelte';

	//PROPS
	export let data;
	//console.log(data);

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light font-medium">${children}</p>`;
		}
	};
</script>

<div id="genesis-pass" class="bg-transparent h-auto w-auto">
	<!-- <Main> -->
	<div
		class="flex h-full w-full items-center justify-center space-x-32 sm:flex-col lg:flex-row">
		<div class="h-full w-full">
			<div class="flex h-auto w-auto justify-center">
				<video width="100%" autoplay loop muted>
					<source
						src="/assets/vids/alpha/genesis-pass-collage.webm"
						type="video/webm" />
				</video>
			</div>
		</div>
		<div class="flex h-full w-full flex-col justify-center">
			<div
				class="mb-24 font-medium text-primary-light sm:text-center sm:text-p4 md:text-p2 lg:text-left">
				<Saos
					animation={'from-left 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
					{data.headline_1[0].text}
					<!-- {@html prismicH.asHTML(data.section_paragraph, null, htmlSerializer)} -->
				</Saos>
			</div>
			<Saos
				animation={'from-right 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
				<div class="flex h-auto w-full items-center justify-center" />
				<h1
					class="font-bold text-primary-main sm:text-center sm:text-h7 md:text-h4 lg:text-left">
					{data.headline_2[0].text}
				</h1>
				<h1
					class="font-bold text-primary-light sm:text-center sm:text-h7 md:text-h4 lg:text-left">
					{data.headline_3[0].text}
				</h1>
			</Saos>
			<div
				class="pb-64 pt-48 font-medium text-primary-light sm:text-center sm:text-p3 md:text-p1 lg:text-left">
				<Saos
					animation={'from-left 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
					<!-- <span class="font-bold text-primary-main">MINT</span> OCT. 8 / 2022 -->
					{@html prismicH.asHTML(data.headline_4, null, htmlSerializer)}
				</Saos>
			</div>
			<div class="">
				<Saos
					animation={'from-right 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
					<div
						class="flex w-auto space-x-24 sm:justify-center lg:justify-start">
						<PrimaryButton label={data.button_label} url={data.button_url} />
						<PrimaryButton
							label={data.button_2_label}
							url={data.button_2_url} />
					</div>
					<!-- {@html prismicH.asHTML(data.section_paragraph, null, htmlSerializer)} -->
				</Saos>
			</div>
		</div>
	</div>
	<!-- </Main> -->
</div>

<style>
	video::-internal-media-controls-overlay-cast-button {
		display: none;
	}
</style>
