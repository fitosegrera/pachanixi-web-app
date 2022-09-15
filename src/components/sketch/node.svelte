<script>
	//LIBS
	import P5 from 'p5-svelte';

	export let orbitColor,
		planetColor,
		bgColor,
		orbits,
		w,
		h,
		canvasMargin,
		orbitMargin;
	let orbitsArray = [];
	let theta = 0;
	let planetSpeed = [];
	let stars = [];

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(w, h);
			p5.rectMode(p5.CENTER);
			p5.noStroke();
			planetSpeed = new Array(orbits);
			orbitsArray = new Array(orbits);
			stars = new Array(p5.round(p5.random(10, 30)));

			for (let i = 0; i < orbits; i++) {
				orbitsArray[i] = new Orbit(
					orbits,
					w - canvasMargin - (i + 1) * orbitMargin
				);
				planetSpeed[i] = p5.random(-0.02, 0.02);
			}

			for (let i = 0; i < stars.length; i++) {
				stars[i] = {
					x: p5.random(-w / 4, w / 4),
					y: p5.random(-h / 4, h / 4),
					r: p5.random(0.25, 3),
					a: p5.random(10, 205)
				};
			}
		};

		p5.draw = () => {
			p5.background(0, 0, 0, 0);
			p5.noStroke();

			p5.fill(bgColor);
			p5.ellipse(
				p5.width / 2,
				p5.height / 2,
				w - canvasMargin,
				h - canvasMargin
			);

			p5.push();
			p5.translate(w / 2, h / 2);
			for (let i = 0; i < stars.length; i++) {
				p5.fill(255, stars[i].a);
				p5.ellipse(stars[i].x, stars[i].y, stars[i].r);
			}
			p5.pop();

			for (let i = 0; i < orbitsArray.length; i++) {
				orbitsArray[i].update();
				orbitsArray[i].show(planetSpeed[i]);
			}
		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
		};

		class Orbit {
			constructor(orbs, d) {
				this.orbits = orbs;
				this.diameter = d;
			}

			update() {}
			show(s) {
				p5.noFill();
				p5.drawingContext.setLineDash([5, 5]);
				p5.stroke(orbitColor);
				p5.ellipse(p5.width / 2, p5.height / 2, this.diameter, this.diameter);

				p5.push();
				let ellipseRad = 8;
				let r = this.diameter - canvasMargin - orbitMargin / 2 - ellipseRad;
				var x = r * p5.cos(theta);
				var y = r * p5.sin(theta);
				p5.fill(planetColor);
				p5.noStroke();
				p5.translate(w / 2, h / 2);
				p5.ellipse(x, y, ellipseRad);
				theta += s;
				p5.pop();
			}
		}
	};
</script>

<P5 {sketch} />
