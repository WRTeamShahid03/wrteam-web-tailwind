import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
			fontFamily: {
				montserrat: [
					'var(--font-montserrat)',
					'sans-serif'
				],
				poppins: [
					'var(--font-poppins)',
					'sans-serif'
				],
				roboto: [
					'var(--font-roboto)',
					'sans-serif'
				],
				sans: [
					'var(--font-poppins)',
					'system-ui',
					'sans-serif'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: {
				'above-1800': { min: '1800px' },
				'between-1200-1399': {
					min: '1200px',
					max: '1399px'
				},
				'max-1199': {
					max: '1199px'
				},
				'max-479': {
					max: '479px'
				},
				'max-399': {
					max: '399px'
				}
			},
			keyframes: {
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				float: 'float 2.5s ease-in-out infinite',
				'float-delayed': 'float 2.5s ease-in-out 0.5s infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
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
	plugins: [tailwindcssAnimate],
} satisfies Config;
