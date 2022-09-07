<script>
	//LIBS
	import Saos from 'saos';

	//COMPONENTS
	import CircularCountdown from '../../components/information/circular-countdown.svelte';
	import Divider from '../../components/information/divider.svelte';

	//CONTAINER
	import Main from '../../containers/main.svelte';

	$: days = 0;
	$: hours = 0;
	$: minutes = 0;
	$: seconds = 0;

	let totalDays = 30;
	let totalHours = totalDays * 24;
	let totalMinutes = totalHours * 60;
	let totalSeconds = totalMinutes * 60;

	let countDownDate = new Date('Oct 7, 2022 17:59:59').getTime();

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

<div class="h-auto w-auto bg-primary-dark pt-16 text-center">
	<Main>
		<div class="flex h-auto w-full items-center justify-center">
			<Saos
				animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div class="flex h-auto w-full items-center justify-center">
					<Divider
						name="homepage-countdown-section-divider"
						w={'50'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h1 class="text-center text-p1 font-bold text-primary-main">
					COUNTDOWN TO METACOSMIC ORIGIN EVENT
				</h1>
			</Saos>
		</div>
		<div class="flex h-auto w-full items-center justify-center">
			<Saos
				animation={'slide-in-elliptic-top-fwd 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div
					class="grid h-auto w-996 grid-cols-4 space-x-48 sm:mt-124 sm:pb-96">
					<div class="mx-auto">
						<CircularCountdown progress={0.0} label={'DAYS'} t={days} />
					</div>
					<div class="mx-auto">
						<CircularCountdown progress={0.6} label={'HOURS'} t={hours} />
					</div>
					<div class="mx-auto">
						<CircularCountdown progress={0.88} label={'MINS'} t={minutes} />
					</div>
					<div class="mx-auto">
						<CircularCountdown progress={0.9} label={'SECS'} t={seconds} />
					</div>
				</div>
			</Saos>
		</div>
	</Main>
</div>
