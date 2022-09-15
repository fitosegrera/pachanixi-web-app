<script>
	//LIBS
	import Saos from 'saos';
	import Icon from '@iconify/svelte';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import Scroller from '../../components/information/scroller.svelte';
	import Divider from '../../components/information/divider.svelte';
	import RandomPixels from '../../components/sketch/random-pixels.svelte';
	//PROPS
	export let data;

	let scrollerText =
		'💎 3 rarity tiers + 3 whitelisted and public drops + 3,333 NixiSeeds NFTs reserved for in-game minting = total suply of 9,999 NixiSeeds NFTs ';
</script>

<div id="wrapper" class="h-auto w-auto  text-center">
	<!-- <div id="img-wrapper" class="h-full w-full" /> -->
	<div class="h-auto w-full">
		<Scroller data={scrollerText} />
	</div>
	<Main>
		<div class="pt-48 font-bold text-primary-main sm:text-h7 md:text-h5">
			<Saos animation={'from-left 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
				<div class="flex h-auto w-full items-center justify-center">
					<Divider
						name="homepage-tiers-section-divider"
						w={'50'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h5>{data.primary.title[0].text}</h5>
			</Saos>
		</div>
		<div
			class="md:mt-56 grid h-auto w-full pb-160 sm:mt-32 sm:grid-cols-1 sm:gap-32 md:grid-cols-2 xl:mt-88 xl:grid-cols-3 xl:gap-24 2xl:grid-cols-4">
			{#each data.items as item, i}
				<div class="mx-auto space-y-64">
					<RandomPixels path={`/assets/vids/nft-${i}.mp4`} />
					<Saos
						animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
						<div class="space-y-8">
							<div
								class="space--12 flex items-center justify-center text-p1 font-bold text-primary-main">
								<Icon icon="fluent:weather-sunny-low-20-regular" />
								<h1 class="">NIKUMA TIER</h1>
							</div>
							<p class="text-p3 text-primary-light">
								<span class="font-bold">Rarity:</span> Common
							</p>
							<p class="text-p3 text-primary-light">
								<span class="font-bold">Supply:</span> 3,333
							</p>
						</div>
					</Saos>
				</div>
			{/each}
		</div>
		<Saos animation={'from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<p
				class="text-center font-medium text-primary-light sm:mt-32 sm:px-16 sm:pb-48 sm:text-p3 md:px-72 md:text-p2 lg:mt-0 lg:px-124 lg:pb-160 lg:text-p1 xl:px-224">
				Each tier provides an additional benefit or utility when used in
				Pachanixi’s metacosmos.
			</p>
		</Saos>
	</Main>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: 10;
		background: linear-gradient(180deg, #02232b 50%, #10181a00 100%);
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
			from(#02232b22),
			to(#02232b00)
		);
		mask-image: linear-gradient(to bottom, #02232b22, #02232b00);
		z-index: -10;
	}
</style>
