<script>
	//LIBS
	import P5 from 'p5-svelte';

	export let startColor, endColor, speed;
	let stars = [];

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
			p5.rectMode(p5.CENTER);
			p5.noStroke();

			let starsAmount = p5.width / 2;
			for (let i = 0; i < starsAmount; i++) {
				stars[i] = new Star(speed);
				// stars[i].speed = speed;
			}
		};

		p5.draw = () => {
			let c1 = p5.color(startColor);
			let c2 = p5.color(endColor);

			for (let y = 0; y < p5.height; y++) {
				let n = p5.map(y, 0, p5.height, 0, 1);
				let newc = p5.lerpColor(c1, c2, n);
				p5.stroke(newc);
				p5.line(0, y, p5.width, y);
			}

			p5.translate(p5.width / 2, p5.height / 2);
			for (let i = 0; i < stars.length; i++) {
				stars[i].update();
				stars[i].show();
			}
		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
		};

		class Star {
			constructor(s) {
				this.x = p5.random(-p5.width / 2, p5.width / 2);
				this.y = p5.random(-p5.height / 2, p5.height / 2);
				this.z = p5.random(p5.width);

				this.pz = this.z;
				this.speed = s;
			}

			update() {
				this.z = this.z - this.speed;
				if (this.z < 1) {
					this.x = p5.random(-p5.width / 2, p5.width / 2);
					this.y = p5.random(-p5.height / 2, p5.height / 2);
					this.z = p5.width;
					this.pz = this.z;
				}
			}
			show() {
				p5.fill(255);
				p5.noStroke();

				let sx = p5.map(this.x / this.z, 0, 1, 0, p5.width);
				let sy = p5.map(this.y / this.z, 0, 1, 0, p5.height);

				let r = p5.map(this.z, 0, p5.width, 12, 0);
				//ellipse(sx, sy, r, r);

				let px = p5.map(this.x / this.pz, 0, 1, 0, p5.width);
				let py = p5.map(this.y / this.pz, 0, 1, 0, p5.height);

				this.pz = this.z;
				p5.stroke(255);
				p5.line(px, py, sx, sy);
			}
		}
	};
</script>

<P5 {sketch} />
