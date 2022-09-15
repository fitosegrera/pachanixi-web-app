<script>
	//PROPS
	export let heading, paragraph;
</script>

<div class="space-y-32">
	<div class="flex justify-center">
		<svg
			width="201"
			height="233"
			viewBox="0 0 201 233"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M100.5 7.5L6 62V171L100.5 226L195 171V62L100.5 7.5Z"
				fill="#10181A"
				fill-opacity="0.7"
				stroke="#BDFF00"
				stroke-opacity="0.8"
				stroke-width="12" />
			<path
				d="M100 66.5C72.35 66.5 50 89 50 116.5C50 144 72.5 166.5 100 166.5C127.5 166.5 150 144 150 116.5C150 89 127.5 66.5 100 66.5ZM100 156.5C77.9 156.5 60 138.6 60 116.5C60 94.4 77.9 76.5 100 76.5C122.1 76.5 140 94.4 140 116.5C140 138.6 122.1 156.5 100 156.5ZM80 126.5L75 96.5L90 106.5L100 91.5L110 106.5L125 96.5L120 126.5H80ZM82.8 136.5C81.1 136.5 80 135.4 80 133.7V131.5H120V133.7C120 135.4 118.9 136.5 117.2 136.5H82.8Z"
				fill="#BDFF00" />
		</svg>
	</div>
	<div class="mx-auto w-320 space-y-16">
		<h1 class="text-p2 font-bold text-primary-main">{heading}</h1>
		<p class="text-p3 text-primary-light">{paragraph}</p>
	</div>
</div>
