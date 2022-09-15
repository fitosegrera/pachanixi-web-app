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
			<circle cx="100" cy="121.5" r="56" stroke="#BDFF00" stroke-width="8" />
			<path
				d="M91 101.5V116.5C103.09 123.91 89.32 131.41 82 134.5V143.5H127V134.5C107.77 126.31 116.41 113.5 130 110.5V101.5H91ZM70 104.5C72.43 110.89 77.26 115 85 116.5V104.5H70Z"
				fill="#BDFF00" />
		</svg>
	</div>
	<div class="mx-auto w-320 space-y-16">
		<h1 class="text-p2 font-bold text-primary-main">{heading}</h1>
		<p class="text-p3 text-primary-light">{paragraph}</p>
	</div>
</div>
