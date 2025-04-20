/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        '1': '1px',
      },
      // Add custom animation durations
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      // Add custom animation delays
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'jump-in': 'jumpIn 1s ease-out',
        'fade-up-linear': 'fadeUp 0.5s linear',
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-in forwards",
        "slide-out-left": "slide-out-left 0.3s ease-in forwards"
      },
      animationDelay: {
        '100ms': '100ms',
        '200ms': '200ms',
        '300ms': '300ms',
        '400ms': '400ms',
        '500ms': '500ms',
        '600ms': '600ms',
        '700ms': '700ms',
        '800ms': '800ms',
        '900ms': '900ms',
        '1000ms': '1000ms',
      },
      animationDuration: {
        '800ms': '800ms',
        '900ms': '900ms',
        '500ms': '500ms',
      },
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        jumpIn: {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-left": {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        "slide-out-left": {
          '0%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
      },
      spacing: {
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '40.5': '10.125rem',
        '40.1': '10.025rem',
        '50': '12.5rem',
        '55': '13.75rem',
        '62': '15.5rem',
        '70': '17.5rem',
        '90': '22.5rem',
        '110': '27.5rem',
        '120': '30rem',
        '150': '37.5rem',
        '175': '43.75rem',
      },
      padding: {
        '12': '3rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '40': '10rem',
        '50': '12.5rem',
        '55': '13.75rem',
        '62': '15.5rem',
        '70': '17.5rem',
        '90': '22.5rem',
        '110': '27.5rem',
        '120': '30rem',
        '150': '37.5rem',
        '175': '43.75rem',
      },
      width: {
        'md': '28rem',
        'lg': '32rem',
        '1/9': '11.111111%',
        '35': '8.75rem',
        '40.1': '10.025rem',
        '40.5': '10.125rem',
        '52': '13rem',
        '62': '15.5rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      height: {
        '25': '6.25rem',
        '28': '7rem',
        '120': '30rem',
        '175': '43.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      opacity: {
        '70': '0.7',
        '85': '0.85',
      },
      zIndex: {
        '27': '27',
        '59': '59',
        '62': '62',
      },
      brightness: {
        '85': '.85',
      },
      minHeight: {
        'screen': '100vh',
        'dvh': '100dvh',
      },
      maxHeight: {
        'dvh': '100dvh',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
