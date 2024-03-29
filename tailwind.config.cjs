//COLORS
const primaryMain = '#BDFF00';
const primaryMainVariant = '#DBFF7344';
const primaryDark = '#10181A'; //'#02232B';
const primaryLight = '#F6FFFA';
const primaryLightVariant = '#bbbbbb';
const primaryDarkVariant = '#02232B'; //'#10181A';
const primaryDarkAlpha = '#02232B55';
const primaryDarkAlphaVariant = '#10181ADD';
const primarySemiDark = '#386B68';
const secondaryMain = '#7E44F8';
const tertiaryMain = '#FF197A';
const darker = '#02191E';
const darkerVariant = '#1D3C43';
const transparent = '#00000000';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'primary-main': primaryMain,
			'primary-main-variant': primaryMainVariant,
			'primary-dark': primaryDark,
			'primary-dark-variant': primaryDarkVariant,
			'primary-dark-alpha': primaryDarkAlpha,
			'primary-dark-alpha-variant': primaryDarkAlphaVariant,
			'primary-semi-dark': primarySemiDark,
			'primary-light': primaryLight,
			'primary-light-variant': primaryLightVariant,
			'secondary-main': secondaryMain,
			'tertiary-main': tertiaryMain,
			darker: darker,
			'darker-variant': darkerVariant,
			transparent: transparent
		},
		spacing: {
			0: '0px',
			2: '2px',
			4: '4px',
			6: '6px',
			8: '8px',
			12: '12px',
			16: '16px',
			20: '20%',
			24: '24px',
			28: '28px',
			32: '32px',
			33: '33%',
			36: '36px',
			44: '44px',
			45: '45%',
			48: '48px',
			50: '50%',
			60: '60%',
			64: '64px',
			65: '65%',
			68: '68px',
			72: '72px',
			75: '75%',
			80: '80px',
			85: '85%',
			88: '88px',
			92: '92px',
			96: '96px',
			100: '100px',
			112: '112px',
			116: '116px',
			124: '124px',
			120: '120px',
			132: '132px',
			148: '148px',
			160: '160px',
			172: '172px',
			196: '196px',
			200: '200%',
			210: '210px',
			220: '220px',
			224: '224px',
			240: '240px',
			264: '264px',
			296: '296px',
			320: '320px',
			340: '340px',
			368: '368px',
			420: '420px',
			432: '432px',
			456: '456px',
			480: '480px',
			520: '520px',
			600: '600px',
			640: '640px',
			680: '680px',
			720: '720px',
			760: '760px',
			800: '800px',
			820: '820px',
			840: '840px',
			860: '860px',
			920: '920px',
			960: '960px',
			996: '996px',
			1120: '1120px',
			1440: '1440px',
			1600: '1600px',
			1920: '1920px'
		},
		fontSize: {
			h1: [
				'220px',
				{
					lineHeight: '220px'
				}
			],
			h2: [
				'184px',
				{
					lineHeight: '184px'
				}
			],
			h3: [
				'124px',
				{
					lineHeight: '132px'
				}
			],
			h4: [
				'100px',
				{
					lineHeight: '112px'
				}
			],
			h5: [
				'84px',
				{
					lineHeight: '96px'
				}
			],
			h6: [
				'64px',
				{
					lineHeight: '72px'
				}
			],
			'h6.5': [
				'56px',
				{
					lineHeight: '64px'
				}
			],
			h7: [
				'48px',
				{
					lineHeight: '52px'
				}
			],
			p1: [
				'44px',
				{
					lineHeight: '52px'
				}
			],
			p2: [
				'36px',
				{
					lineHeight: '44px'
				}
			],
			p3: [
				'24px',
				{
					lineHeight: '32px'
				}
			],
			p4: [
				'16px',
				{
					lineHeight: '20px'
				}
			],
			'2xl': [
				'96px',
				{
					lineHeight: '96px'
				}
			],
			xl: [
				'72px',
				{
					lineHeight: '72px'
				}
			],
			lg: [
				'36px',
				{
					lineHeight: '36px',
					letterSpacing: '0.1em'
				}
			]
		},
		screens: {
			sm: '320px',
			// => @media (min-width: 320px) { ... }

			md: '640px',
			// => @media (min-width: 640px) { ... }

			lg: '960px',
			// => @media (min-width: 960px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1440px'
			// => @media (min-width: 1440px) { ... }
		},
		extend: {}
	},
	plugins: []
};
