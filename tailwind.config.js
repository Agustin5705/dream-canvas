const config = {
  // Ensure Tailwind scans all your component files
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', },
    extend: {
      fontFamily: {
        // Use 'Inter' as a placeholder until your custom font is ready
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Custom font for titles to apply the stylistic tilt
        sketch: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      // You will later add custom colors, shadows, and animations here
      colors: {
        'paper-bg': '#f7f7f7', // Placeholder for the soft background
        'accent-dark': '#222', // Placeholder for deep pencil marks
        'pencil-gray': '#4a4a4a', // Darker text/lines
        'soft-clay': '#e8e5e1', // Muted card background
      },
      borderRadius: {
        // Highly asymmetrical, non-uniform rounding for an organic feel
        'wobbly': '30% 70% 20% 80% / 60% 40% 70% 30%',
      },
      boxShadow: {
        // Simulates the soft, smudged appearance of a pencil drawing on paper
        'pencil': '4px 6px 12px -2px rgba(74, 74, 74, 0.3), -2px -2px 8px 0px rgba(74, 74, 74, 0.1)',
      },
      transformOrigin: {
        'bottom': 'center bottom', // Allows the use of 'origin-bottom' class
      },
      keyframes: {
        'cloud-roll-short': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(5vw)' }, // small drift
        },
        'cloud-roll-medium': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10vw)' }, // medium drift
        },
        'cloud-roll-long': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(20vw)' },
        },
        'cloud-drift-left': {
          '0%': {
            transform: 'translateX(0vw)',
          },
          '100%': {
            transform: 'translateX(-220vw)',
          }
        },
        'tree-sway': {
          '0%, 100%': { transform: 'rotate(0.5deg)' },
          '50%': { transform: 'rotate(-0.5deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1.0)', opacity: '1' },
          '50%': { transform: 'scale(1.01)', opacity: '0.95' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        'sun-radiate': {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.02)',
            filter: 'brightness(1.2)',
          },
        },
        'shooting-star': {
          '0%': { opacity: '0', transform: 'translate(0,0) rotate(-45deg)' },
          '10%': { opacity: '0.3', transform: 'translate(0,0) rotate(-45deg)' },
          '100%': { opacity: '0', transform: 'translate(-400px,500px) rotate(-45deg)' },
        },
        'rainFall': {
          '0%': { transform: 'translateY(-101vh)' },
          '100%': { transform: 'translateY(101vh)' }
        }

      },
      animation: {
        'breathe-slow': 'breathe 8s ease-in-out infinite',
        'breathe-fast': 'breathe 4s ease-in-out infinite',
        'cloud-roll-short': 'cloud-roll-short 30s ease-in-out infinite alternate',
        'cloud-roll-medium': 'cloud-roll-medium 30s ease-in-out infinite alternate',
        'cloud-roll-long': 'cloud-roll-long 30s ease-in-out infinite alternate',
        'tree-sway': 'tree-sway 5s ease-in-out infinite alternate',
        'sun-radiate': 'sun-radiate 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'cloud-left-quick': 'cloud-drift-left 60s linear infinite',
        'cloud-left-very-quick': 'cloud-drift-left 50s linear infinite',
        'cloud-left-medium': 'cloud-drift-left 70s linear infinite',
        'cloud-left-slow': 'cloud-drift-left 80s linear infinite',
        'cloud-left-very-slow': 'cloud-drift-left 100s linear infinite',
        'shooting-star': 'shooting-star 5s ease-in-out forwards',
        'shooting-star-slow': 'shooting-star 6s ease-in-out forwards',
        'shooting-star-fast': 'shooting-star 4s ease-in-out forwards',
        'rain-animation-super-slow': 'rainFall 1.3s linear infinite',
        'rain-animation-very-slow': 'rainFall 1.2s linear infinite',
        'rain-animation-slow': 'rainFall 1.1s linear infinite',
        'rain-animation-medium': 'rainFall 1s linear infinite',
        'rain-animation-fast': 'rainFall 0.9s linear infinite',
        'rain-animation-very-fast': 'rainFall 0.8s linear infinite',
        'rain-animation-super-fast': 'rainFall 0.7s linear infinite',
      },
    },
  },
  plugins: [],
};

module.exports = config;