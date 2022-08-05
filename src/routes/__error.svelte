<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}:`,
				subTitle: error.message
			}
		};
	}
</script>

<script>
	//CONTAINERS
	import Main from '../containers/main.svelte';

	//COMPONENTS
	import PageLoader from '../components/information/page-loader.svelte';

	//PROPS
	export let title, subTitle;
</script>

<div class="w-full h-auto">
	<Main>
		<div class="flex flex-col w-full h-960 items-center justify-center text-center space-y-16">
			<h1 class="text-h1 font-bold text-primary-main">{title}</h1>
			<p class="text-h7 font-medium gradient-text-primary-light">{subTitle}</p>
			<PageLoader
				w={460}
				h={16}
				foreground={'#BDFF00'}
				background={'#02232B'}
				cols={60}
				rows={20}
				threshold={0.96}
			/>
		</div>
	</Main>
</div>
