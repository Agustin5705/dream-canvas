const config = {
  // Ensure Tailwind scans all your component files
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      keyframes: {
        'cloud-roll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10%)' },
        },
        'tree-sway': {
          '0%, 100%': { transform: 'rotate(0.5deg)' },
          '50%': { transform: 'rotate(-0.5deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1.0)', opacity: '1' },
          '50%': { transform: 'scale(1.01)', opacity: '0.95' },
        },
      },
      animation: {
        'breathe-slow': 'breathe 8s ease-in-out infinite',
        'breathe-fast': 'breathe 4s ease-in-out infinite',
        'cloud-roll': 'cloud-roll 60s linear infinite alternate',
        'tree-sway': 'tree-sway 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

module.exports = config;