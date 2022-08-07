<script>
	//PROPS
	export let data;
</script>

<div class="w-auto h-auto shadow-xl">
	<div class="video-wrapper flex justify-center">
		<video autoplay loop muted>
			<source src={data.video_path} type="video/mp4" />
		</video>
	</div>
	<div class="w-full h-auto">
		<div class="w-auto h-8 bg-primary-semi-dark" />
		<div clsas="w-auto h-full">
			<div class="h-full float-left">
				<p class="text-p3 font-bold text-primary-light text-left pl-16 pt-16">
					{data.nft_project_name}
				</p>
				<p class="text-p4 font-medium text-primary-light text-left pl-16 pb-16 pt-8">
					{data.nft_id_number}
				</p>
			</div>
			<div class="h-full float-right">
				<p class="text-p3 font-bold text-primary-light text-right pr-16 pt-16">Price</p>
				<div class="flex items-center space-x-8 w-full h-auto pr-16 pb-16 pt-8">
					<img width="24px" src={data.crypto_logo.url} alt="cardano logo" />
					<p class="text-p4 font-medium text-primary-light text-center ">75.00</p>
				</div>
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
