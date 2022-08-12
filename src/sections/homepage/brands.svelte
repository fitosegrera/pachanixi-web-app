<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//PROPS
	export let data;
</script>

<div class="pt-196">
	<Main>
		<div class="pb-112 text-center text-p2 font-bold text-primary-light">
			<h1>{data.primary.brands_section_title[0].text.toUpperCase()}</h1>
		</div>
		<div class="flex justify-center space-x-224">
			{#each data.items as item}
				<div>
					<img
						style="max-height: 100px;"
						src={item.logo_image.url}
						alt={item.logo_image.alt} />
				</div>
			{/each}
			<!-- <img src={data.primary.logo_image.url} alt="" /> -->
		</div>
	</Main>
</div>
