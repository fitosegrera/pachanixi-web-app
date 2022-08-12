<script>
	//PROPS
	export let data;
	console.log(data);
</script>

<div class="h-auto w-auto shadow-xl">
	<div class="video-wrapper flex justify-center">
		<video autoplay loop muted>
			<source src={data.video_path} type="video/mp4" />
		</video>
	</div>
	<div class="h-auto w-full">
		<div class="h-8 w-auto bg-primary-semi-dark" />
		<div clsas="w-auto h-full">
			<div class="float-left h-full w-full">
				<p class="pl-16 pt-16 text-left text-p3 font-bold text-primary-light">
					{data.nft_project_name}
				</p>

				<div class="flex h-full w-full items-center space-x-8 px-16 pt-8 pb-16">
					<div>
						<p class="text-left text-p4 font-medium text-primary-light">
							{data.nft_id_number}
						</p>
					</div>
					<div class="flex h-auto w-full items-center justify-end space-x-8">
						<div>
							<p class="text-p4 font-bold text-primary-light">Rarity</p>
						</div>
						<div>
							<p class=" text-p4 font-medium text-primary-light ">
								{data.rarity_level}%
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="float-right h-full">
				<!-- <div class="flex h-full w-full justify-end space-x-8 pr-16 pt-24">
					<div>
						<p class="text-p4 font-bold text-primary-light">Rarity</p>
					</div>
					<div>
						<p class=" text-p4 font-medium text-primary-light ">
							{data.rarity_level}%
						</p>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</div>

<style>
	.video-wrapper {
		margin: 0 auto;
	}

	video {
		width: 100% !important;
		height: auto !important;
	}
</style>
