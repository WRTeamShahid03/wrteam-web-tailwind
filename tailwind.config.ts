import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: {
				"between-1200-1399": {
					min: "1200px",
					max: "1399px",
				},
				"max-1199": {
					max: "1199px",
				},
				"max-479": {
					max: "479px",
				},
				"max-399": {
					max: "399px",
				},
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '3rem',
				'2xl': '7rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
