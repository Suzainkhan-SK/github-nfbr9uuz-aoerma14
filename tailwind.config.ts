import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(1deg)' },
					'66%': { transform: 'translateY(-25px) rotate(-1deg)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-30px) scale(1.05)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 30px hsl(var(--primary) / 0.4)', filter: 'brightness(1)' },
					'100%': { boxShadow: '0 0 60px hsl(var(--primary) / 0.8)', filter: 'brightness(1.2)' }
				},
				'pulse-glow-secondary': {
					'0%': { boxShadow: '0 0 30px hsl(var(--secondary) / 0.4)' },
					'100%': { boxShadow: '0 0 60px hsl(var(--secondary) / 0.8)' }
				},
				'pulse-glow-accent': {
					'0%': { boxShadow: '0 0 30px hsl(var(--accent) / 0.4)' },
					'100%': { boxShadow: '0 0 60px hsl(var(--accent) / 0.8)' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(60px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-60px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(60px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'scale-in': {
					from: { transform: 'scale(0.8)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'float-slow': 'float-slow 12s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite alternate',
				'pulse-glow-secondary': 'pulse-glow-secondary 3s ease-in-out infinite alternate',
				'pulse-glow-accent': 'pulse-glow-accent 3s ease-in-out infinite alternate',
				'slide-up': 'slide-up 1s ease-out forwards',
				'slide-in-left': 'slide-in-left 1s ease-out forwards',
				'slide-in-right': 'slide-in-right 1s ease-out forwards',
				'fade-in': 'fade-in 1.2s ease-out forwards',
				'scale-in': 'scale-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'shimmer': 'shimmer 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
