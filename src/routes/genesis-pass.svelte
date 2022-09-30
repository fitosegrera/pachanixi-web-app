<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import SvelteTooltip from 'svelte-tooltip';
	import Saos from 'saos';
	import { onMount } from 'svelte';

	//COMPONENTS
	import Divider from '../components/information/divider.svelte';
	onMount(async () => {
		document.addEventListener('mousemove', parallax);
	});

	const parallax = (event) => {
		let img = document.getElementById('img-wrapper');
		const imgPos = 2;
		const imgX = (window.innerWidth - event.pageX * imgPos) / 130;
		const imgY = (window.innerHeight - event.pageY * imgPos) / 90;
		img.style.transform = `translateX(${imgX}px) translateY(${imgY}px)`;
	};
</script>

<svelte:head>
	<title>{'Genesis Pass Utility'}</title>
</svelte:head>

<div id="wrapper" class="relative mx-32 mt-296 mb-96 overflow-x-auto">
	<div id="img-wrapper" class="h-full w-full" />
	<div>
		<Saos animation={'from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div
				class="text-center font-bold text-primary-main sm:text-h7 md:text-h3">
				<div class="flex h-auto w-full items-center justify-center">
					<Divider
						name="homepage-section-1-divider"
						w={'50'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>

				<h1>PACHANIXI</h1>

				<h5 class="text-primary-light">GENESIS PASS</h5>
				<h5 class="text-primary-light">COLLECTION</h5>
			</div>
		</Saos>
		<!-- <h1 class="text-center text-h5 font-bold text-primary-main">
			GENESIS PASS COLLECTION
		</h1> -->
		<h2 class="my-72 px-124 text-center text-p2 font-medium text-primary-light">
			The Genesis Pass is Pachanixi’s first utility NFT collection and grants
			unique benefits to early Technoshamans. Please see the following table for
			details.
		</h2>
	</div>
	<table class="w-full text-center text-p3 text-primary-main">
		<thead class="uppercase">
			<tr>
				<th scope="col" class="px-32 py-12">ATTRIBUTE</th>
				<th scope="col" class="px-32 py-12">
					<div class="justify-left flex h-auto w-auto pb-48">
						<video width="100%" autoplay loop muted>
							<source src="/assets/vids/alpha/stone.webm" type="video/webm" />
						</video>
					</div>
				</th>
				<th scope="col" class="px-32 py-12">
					<div class="justify-left flex h-auto w-auto pb-48">
						<video width="100%" autoplay loop muted>
							<source src="/assets/vids/alpha/carbon.webm" type="video/webm" />
						</video>
					</div>
				</th>
				<th scope="col" class="px-32 py-12">
					<div class="justify-left flex h-auto w-auto pb-48">
						<video width="100%" autoplay loop muted>
							<source src="/assets/vids/alpha/gold.webm" type="video/webm" />
						</video>
					</div>
				</th>
				<th scope="col" class="px-32 py-12">
					<div class="justify-left flex h-auto w-auto pb-48">
						<video width="100%" autoplay loop muted>
							<source src="/assets/vids/alpha/crystal.webm" type="video/webm" />
						</video>
					</div>
				</th>
				<th scope="col" class="px-32 py-12">
					<div class="flex h-auto w-auto justify-center pb-48 text-h3">
						<Icon icon="material-symbols:question-mark" />
					</div>
				</th>
			</tr>
		</thead>

		<tbody>
			<tr class="text-center text-primary-light">
				<th
					scope="row"
					class="whitespace-nowrap px-32 py-12 font-medium text-primary-light">
					Type
				</th>
				<td class="px-32 py-12"> Asewa </td>
				<td class="px-32 py-12"> Makewa </td>
				<td class="px-32 py-12"> Maykunu</td>
				<td class="px-32 py-12"> Mouga</td>
				<td class="px-32 py-12"> Ingui</td>
			</tr>
			<tr class="text-center text-primary-light">
				<th
					scope="row"
					class="whitespace-nowrap px-32 py-12 font-medium text-primary-light">
					Tier
				</th>
				<td class="px-32 py-12"> Common </td>
				<td class="px-32 py-12"> Uncommon </td>
				<td class="px-32 py-12"> Rare</td>
				<td class="px-32 py-12"> Sacred</td>
				<td class="px-32 py-12"> Mythic</td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					Rarity
				</th>
				<td class="px-32 py-12"> 57.0% </td>
				<td class="px-32 py-12"> 27.5% </td>
				<td class="px-32 py-12"> 12.5% </td>
				<td class="px-32 py-12"> 2.5% </td>
				<td class="px-32 py-12"> 0.5% </td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					Material
				</th>
				<td class="px-32 py-12"> Stone </td>
				<td class="px-32 py-12"> Carbon </td>
				<td class="px-32 py-12"> Gold </td>
				<td class="px-32 py-12"> Crystal </td>
				<td class="px-32 py-12"> Rainbow </td>
			</tr>
			<tr>
				<th scope="col" class="px-32 py-64"> UTILITY </th>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					<div class="flex items-center justify-center space-x-12">
						<p>COSME</p>

						<div class="flex items-center font-medium text-primary-dark">
							<SvelteTooltip
								tip="Council of Sacred Members: early adopters of Pachanixi will have special benefits in the future"
								right
								color="#BDFF00">
								<div
									class="cursor-pointer text-primary-light hover:text-primary-main">
									<Icon icon="ant-design:info-circle-outlined" />
								</div>
							</SvelteTooltip>
						</div>
					</div>
				</th>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					<div class="flex items-center justify-center space-x-12">
						<p>Whitelist</p>

						<div class="flex items-center font-medium text-primary-dark">
							<SvelteTooltip
								tip="One spot in all future whitelists"
								right
								color="#BDFF00">
								<div
									class="cursor-pointer text-primary-light hover:text-primary-main">
									<Icon icon="ant-design:info-circle-outlined" />
								</div>
							</SvelteTooltip>
						</div>
					</div>
				</th>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					<div class="flex items-center justify-center space-x-12">
						<p>NixiSeed Airdrop</p>
						<div class="flex items-center font-medium text-primary-dark">
							<SvelteTooltip
								tip="Airdrop of x1 NixiSeed NFT"
								right
								color="#BDFF00">
								<div
									class="cursor-pointer text-primary-light hover:text-primary-main">
									<Icon icon="ant-design:info-circle-outlined" />
								</div>
							</SvelteTooltip>
						</div>
					</div>
				</th>
				<td class="px-32 py-12 text-tertiary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-tertiary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-tertiary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center text-primary-main">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center text-primary-main">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					<div class="flex items-center justify-center space-x-12">
						<p>NixiGarden Airdrop</p>

						<div class="flex items-center font-medium text-primary-dark">
							<SvelteTooltip
								tip="Airdrop of x1 NixiGarden NFT"
								right
								color="#BDFF00">
								<div
									class="cursor-pointer text-primary-light hover:text-primary-main">
									<Icon icon="ant-design:info-circle-outlined" />
								</div>
							</SvelteTooltip>
						</div>
					</div>
				</th>
				<td class="px-32 py-12 text-tertiary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-tertiary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-tertiary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-tertiary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					<div class="flex items-center justify-center space-x-12">
						<p>Exclusive Raffle</p>
						<div class="flex items-center font-medium text-primary-dark">
							<SvelteTooltip
								tip="Raffle only available for Genesis Pass holders"
								right
								color="#BDFF00">
								<div
									class="cursor-pointer text-primary-light hover:text-primary-main">
									<Icon icon="ant-design:info-circle-outlined" />
								</div>
							</SvelteTooltip>
						</div>
					</div>
				</th>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					<div class="flex items-center justify-center space-x-12">
						<p>Rarity-based Staking</p>
						<div class="flex items-center font-medium text-primary-dark">
							<SvelteTooltip
								tip="Rewards depends of NFT rarity level"
								right
								color="#BDFF00">
								<div
									class="cursor-pointer text-primary-light hover:text-primary-main">
									<Icon icon="ant-design:info-circle-outlined" />
								</div>
							</SvelteTooltip>
						</div>
					</div>
				</th>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
				<td class="px-32 py-12 text-primary-main">
					<div class="flex items-center justify-center">
						<Icon icon="ant-design:check-circle-outlined" />
					</div>
				</td>
			</tr>
			<tr class="text-primary-light">
				<th scope="row" class="whitespace-nowrap px-32 py-12 font-medium">
					<div class="flex items-center justify-center space-x-12">
						<p>Future Discounts</p>
						<div class="flex items-center font-medium text-primary-dark">
							<SvelteTooltip
								tip="Percentage of discount in all future NFT drops"
								right
								color="#BDFF00">
								<div
									class="cursor-pointer text-primary-light hover:text-primary-main">
									<Icon icon="ant-design:info-circle-outlined" />
								</div>
							</SvelteTooltip>
						</div>
					</div>
				</th>
				<td class="px-32 py-12"> 10% </td>
				<td class="px-32 py-12"> 15% </td>
				<td class="px-32 py-12"> 20% </td>
				<td class="px-32 py-12"> 25% </td>
				<td class="px-32 py-12"> 30% </td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	#wrapper {
		position: relative;
		z-index: 1;
	}

	#img-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('/assets/imgs/bg-grabado-1.jpg');
		box-shadow: 55px 55px 80px 10px #02232b inset,
			-25px -55px 50px 80px #02232b inset;
		background-position: bottom;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#10181a11),
			to(#10181a22)
		);
		mask-image: linear-gradient(to bottom, #10181a11, #10181a22, #10181a00);
		z-index: -10;
	}
	video::-internal-media-controls-overlay-cast-button {
		display: none;
	}
</style>
