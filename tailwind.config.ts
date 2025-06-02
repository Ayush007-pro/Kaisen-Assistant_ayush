import type { Config } from "tailwindcss"

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontSize: {
				'customSmall': '0.5rem',
			},

			boxShadow:{
				'custom-colored': '0px 0px 50px -1px rgba(147, 51, 234, 0.8)',
			}
		},
	},
	plugins: [],
} satisfies Config
