<script>
	//LIBS
	import Saos from 'saos';
	import * as prismicH from '@prismicio/helpers';

	//HELPERS
	import { validateMonth } from '../../helpers/monthValidator';

	//COMPONENTS
	import CircularCountdown from '../../components/information/circular-countdown.svelte';
	import Divider from '../../components/information/divider.svelte';

	//CONTAINER
	import Main from '../../containers/margins.svelte';

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

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light font-medium">${children}</p>`;
		}
	};
</script>

<div id="wrapper" class="h-auto w-auto pt-16">
	<Main>
		<div class="flex h-auto w-full flex-col items-center justify-center pt-48">
			<Saos
				animation={'slide-in-elliptic-top-fwd 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
				<div class="flex h-auto w-full items-center justify-center">
					<Divider
						name="homepage-countdown-section-divider"
						w={'50'}
						h={'32'}
						pixCol={'#BDFF00'} />
				</div>
				<h1
					class="text-center font-bold text-primary-main sm:text-h7 md:text-h3">
					{data.section_title[0].text}
				</h1>
			</Saos>
			<div class="pt-64 text-center sm:text-p3 md:text-p1">
				<Saos
					animation={'from-left 1s cubic-bezier(0.05, 0.5, 0.65, 0.95) both'}>
					{@html prismicH.asHTML(data.section_paragraph, null, htmlSerializer)}
				</Saos>
			</div>
		</div>
		<div class="flex h-auto w-full items-center justify-center">
			<div
				class="grid h-auto w-auto gap-48 pt-160 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
				<div class="flex justify-center">
					<CircularCountdown
						progress={0.0}
						label={'DAYS'}
						t={days}
						limit={365}
						orbits={1} />
				</div>
				<div class="flex justify-center">
					<CircularCountdown
						progress={0.6}
						label={'HOURS'}
						t={hours}
						limit={24}
						orbits={1} />
				</div>
				<div class="flex justify-center">
					<CircularCountdown
						progress={0.88}
						label={'MINS'}
						t={minutes}
						limit={60}
						orbits={1} />
				</div>
				<div class="flex justify-center">
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
		background: linear-gradient(180deg, #10181a00 0%, #10181a 50%);
	}
</style>
