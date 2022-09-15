<script>
	//LIBS
	import P5 from 'p5-svelte';

	//PROPS
	export let path;
	export let w = 400;
	export let h = 400;
	export let cols = 10;
	export let rows = 10;
	export let randMin = 180;
	export let randMax = 300;
	export let alphaPixels = true;
	export let showFrame = false;

	let data = {
		video_path: path,
		nft_project_name: 'Pachanixi',
		nft_id_number: '#1234',
		rarity_level: '10'
	};

	const sketch = (p5) => {
		let pixels = p5.round(p5.random(randMin, randMax));
		let vid;

		p5.preload = () => {
			vid = p5.createVideo(data.video_path, playVideo);
		};

		p5.setup = () => {
			p5.createCanvas(w, h);
			// p5.rectMode(p5.CENTER);
			p5.noStroke();
			p5.frameRate(10);
			// /vid.size(w, h);
			//await vid.loop();
			//p5.background(200);
		};

		p5.draw = () => {
			p5.background(0);
			p5.image(vid, 0, 0, w, h);
			if (alphaPixels) {
				p5.fill(189, 255, 0, p5.random(100, 255));
			} else {
				p5.fill(189, 255, 0);
			}
			let sizeX = p5.width / cols;
			let sizeY = p5.height / rows;
			for (let i = 0; i < pixels; i++) {
				p5.rect(
					p5.round(p5.random(0, cols)) * sizeX,
					p5.round(p5.random(0, rows)) * sizeY,
					sizeX,
					sizeY
				);
			}
			if (showFrame) {
				p5.noFill();
				p5.stroke(0);
				p5.strokeWeight(24);
				p5.rect(0, 0, w, h);
				p5.noStroke();
			}
		};

		const playVideo = () => {
			vid.hide();
			// setTimeout(() => {
			// 	vid.autoplay();
			// 	vid.loop();
			// }, 3000);
		};

		p5.mousePressed = () => {
			vid.loop();
		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
		};
	};
</script>

<!-- <div class="relative my-160 border-4 border-solid border-primary-main"> -->
<!-- <div class="absolute top-0 left-0 z-10"> -->
<P5 {sketch} />
<!-- </div> -->
<!-- <NftCard {data} /> -->

<!-- </div> -->
<style>
	/* video {
		visibility: hidden;
	} */
</style>
