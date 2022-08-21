<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import TeamCard from '../../components/card/dark/lg/team.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div class="h-auto w-auto pb-72 pt-48 text-center">
	<Main>
		<div class="font-bold text-primary-main sm:text-h7 md:text-h5">
			<div class="flex h-auto w-full items-center justify-center">
				<Divider
					name="homepage-section-5-divider"
					w={'50'}
					h={'32'}
					pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div
			class="grid h-auto w-full sm:mt-48 sm:grid-cols-1 lg:mt-88 lg:grid-cols-2 xl:grid-cols-3">
			{#each data.items as item, i}
				<TeamCard data={item} />
			{/each}
		</div>
	</Main>
</div>
