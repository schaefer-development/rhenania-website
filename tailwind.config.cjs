const colors = require('tailwindcss/colors');
const { transform, updateImportClause } = require('typescript');

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	plugins: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Red Hat Text', 'Helvetica', 'Arial', 'sans-serif']
			},
			height: {
				'10v': '10vh',
				'20v': '20vh',
				'30v': '30vh',
				'40v': '40vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh'
			}
		},
		colors: {
			...colors,
			rc_darkblue: {
				darkest: '#15254f',
				darker: '#203776',
				DEFAULT: '#2a499d',
				lighter: '#556db1',
				lightest: '#7f92c4'
			},

			rc_skyblue: {
				darkest: '#526a80',
				darker: '#7a9fbf',
				DEFAULT: '#a3d4ff',
				lighter: '#b5ddff',
				lightest: '#c8e5ff'
			},
			rc_red: {
				darker: '#b02629',
				DEFAULT: '#ea3336',
				lighter: '#ee5c5e'
			},
			rc_green: {
				darker: '#43801c',
				DEFAULT: '#59aa25',
				lighter: '#7abb51'
			},
			rc_turquoise: {
				darker: '#1c807d',
				DEFAULT: '#25aaa7',
				lighter: '#7cccca'
			},
			rc_petrol: {
				darker: '#186691',
				DEFAULT: '#2088c1',
				lighter: '#79b8da'
			},
			rc_purple: {
				darker: '#4a1457',
				DEFAULT: '#631b75',
				lighter: '#824990'
			}
		}
	},
	variants: {
		extend: {}
	}
};
