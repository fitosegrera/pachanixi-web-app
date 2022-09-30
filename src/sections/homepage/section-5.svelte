<script>
	//LIBS
	import Saos from 'saos';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import TeamCard from '../../components/card/dark/lg/team.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div id="team" class="h-auto w-auto  pb-72 pt-48 text-center">
	<!-- <div id="img-wrapper" class="h-full w-full" /> -->
	<Main>
		<Saos animation={'from-left 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
			<div class="font-bold text-primary-main sm:text-h7 md:text-h3">
				<div class="flex h-auto w-full items-center justify-center">
					<Divider
						name="homepage-section-5-divider"
						w={'50'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h5>{data.primary.title[0].text}</h5>
			</div>
		</Saos>

		<div
			id="team-wrapper"
			class="grid h-auto w-full gap-y-64 sm:mt-48 sm:grid-cols-1 lg:mt-88 lg:grid-cols-2 xl:grid-cols-3">
			{#each data.items as item, i}
				<TeamCard data={item} />
			{/each}
		</div>
	</Main>
</div>

<style>
	#team {
		position: relative;
		background-image: linear-gradient(to bottom, #10181a 5%, #10181a22 100%);
	}

	#team-wrapper {
		position: relative;
	}

	#img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('/assets/imgs/bg-grabado-1.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#10181a00),
			to(#10181a22)
		);
		mask-image: linear-gradient(to bottom, #10181a00 5%, #10181a44 100%);
		z-index: -10;
	}
</style>
