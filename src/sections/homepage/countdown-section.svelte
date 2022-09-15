<script>
	//LIBS
	import Saos from 'saos';

	//HELPERS
	import { validateMonth } from '../../helpers/monthValidator';

	//COMPONENTS
	import CircularCountdown from '../../components/information/circular-countdown.svelte';
	import Divider from '../../components/information/divider.svelte';

	//CONTAINER
	import Main from '../../containers/main.svelte';

	//PROPS
	export let data;

	let timestamp = data.deadline.split('T');

	let splittedDate = timestamp[0].split('-');
	let targetYear = splittedDate[0];
	let targetMonth = splittedDate[1];
	let targetDay = splittedDate[2];

	let splittedTime = timestamp[1].split(':');
	let targetHour = splittedTime[0];
	let targetMinutes = splittedTime[1];

	$: days = 0;
	$: hours = 0;
	$: minutes = 0;
	$: seconds = 0;

	let totalDays = 10;

	let countDownDate = new Date(
		validateMonth(targetMonth) +
			' ' +
			targetDay +
			', ' +
			targetYear +
			' ' +
			targetHour +
			':' +
			targetMinutes +
			':59'
	).getTime();

	const countDownFunction = setInterval(() => {
		let now = new Date().getTime();
		let timeleft = countDownDate - now;

		// Calculating the days, hours, minutes and seconds left
		days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
		hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

		// Display the message when countdown is over
		if (timeleft < 0) {
			clearInterval(countDownFunction);
			console.log('TIME UP!!');
		}
	}, 1000);
</script>

<div id="wrapper" class="h-auto w-auto pt-16 text-center">
	<Main>
		<div class="flex h-auto w-full items-center justify-center">
			<Saos
				animation={'slide-in-elliptic-top-fwd 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
				<div class="flex h-auto w-full items-center justify-center">
					<Divider
						name="homepage-countdown-section-divider"
						w={'50'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h1 class="text-center text-p1 font-bold text-primary-main">
					{data.section_title[0].text}
				</h1>
			</Saos>
		</div>
		<div class="flex h-auto w-full items-center justify-center">
			<div class="grid h-auto w-996 grid-cols-4 space-x-48 sm:mt-72 sm:pb-96">
				<div class="mx-auto">
					<CircularCountdown
						progress={0.0}
						label={'DAYS'}
						t={days}
						limit={365}
						orbits={1} />
				</div>
				<div class="mx-auto">
					<CircularCountdown
						progress={0.6}
						label={'HOURS'}
						t={hours}
						limit={24}
						orbits={1} />
				</div>
				<div class="mx-auto">
					<CircularCountdown
						progress={0.88}
						label={'MINS'}
						t={minutes}
						limit={60}
						orbits={1} />
				</div>
				<div class="mx-auto">
					<CircularCountdown
						progress={0.9}
						label={'SECS'}
						t={seconds}
						limit={60}
						orbits={1} />
				</div>
			</div>
		</div>
	</Main>
</div>

<style>
	#wrapper {
		background: linear-gradient(180deg, #10181a00 0%, #02232b 70%);
	}
</style>
