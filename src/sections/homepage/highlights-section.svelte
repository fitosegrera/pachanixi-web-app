<script>
	//LIBS
	import Saos from 'saos';

	//COMPONENTS
	import Highlight1 from '../../components/information/highlight/highlight-1.svelte';
	import Highlight2 from '../../components/information/highlight/highlight-2.svelte';
	import Highlight3 from '../../components/information/highlight/highlight-3.svelte';
	import Highlight4 from '../../components/information/highlight/highlight-4.svelte';
	import Highlight5 from '../../components/information/highlight/highlight-5.svelte';

	//PROPS
	export let data;

	console.log(data);
</script>

<div class="space-y-32">
	<div
		class="grid h-full w-full gap-160 py-32 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<div class="flex h-full w-full justify-center">
			<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<Highlight1
					heading={data.items[0].highlight_title[0].text}
					paragraph={data.items[0].highlight_paragraph[0].text} />
			</Saos>
		</div>
		<div class="flex h-full w-full justify-center">
			<Saos
				animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<Highlight2
					heading={data.items[1].highlight_title[0].text}
					paragraph={data.items[1].highlight_paragraph[0].text} />
			</Saos>
		</div>
		<div class="flex h-full w-full justify-center md:col-span-2 lg:col-span-1">
			<Saos
				animation={'from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<Highlight3
					heading={data.items[2].highlight_title[0].text}
					paragraph={data.items[2].highlight_paragraph[0].text} />
			</Saos>
		</div>
	</div>
	<div class="grid h-full w-full gap-160 py-32 sm:grid-cols-1 md:grid-cols-2">
		<div class="flex h-full w-full justify-center">
			<Saos
				animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<Highlight4
					heading={data.items[3].highlight_title[0].text}
					paragraph={data.items[3].highlight_paragraph[0].text} />
			</Saos>
		</div>
		<div class="flex h-full w-full justify-center">
			<Saos
				animation={'from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<Highlight5
					heading={data.items[4].highlight_title[0].text}
					paragraph={data.items[4].highlight_paragraph[0].text} />
			</Saos>
		</div>
	</div>
</div>
<div class="mt-160">
	<Saos animation={'from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<p
			class="text-center font-medium text-primary-light sm:mt-32 sm:mb-48 sm:px-16 sm:text-p3 md:px-24 md:text-p2 lg:mt-0 lg:mb-72 lg:px-124 lg:text-p1 xl:px-224">
			{data.primary.quote[0].text}
		</p>
		<p
			class="text-center italic text-primary-light sm:px-16 sm:text-p4 md:text-p3 lg:px-124 lg:text-p3 xl:px-224">
			{data.primary.author[0].text}
		</p>
	</Saos>
</div>
