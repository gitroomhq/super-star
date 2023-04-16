/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: {
            DEFAULT: '#0E0641',
            medium: '#10074A',
          },
          plum: {
            DEFAULT: '#541548',
            primary: '#E06C67',
            light: '#E968A8',
          },
          white: {
            primary: '#fff',
            medium: '#fff',
            light: '#fff',
          },
          yellow: {
            DEFAULT: '#CD9C83',
          },
        },
      },
      maxWidth: {
        base: '99.625rem',
      },
      backgroundColor: {
        'about-o': 'rgb(14 6 65 / 0.7)'
      },
      backgroundImage: {
        'hero-lg': 'url(/assets/hero-lg.webp)',
        'hero-sm': 'url(/assets/hero-sm.webp)',
        'about-bg': 'url(/assets/bg/testimonial-bg.webp)',
        'stars-bg': 'url(/assets/bg/stars-course.webp)',
        'personal-bg': 'url(/assets/bg/personal-meeting.webp)',
        'recording-left-bg': 'url(/assets/bg/recording-left.webp)',
        'recording-right-bg': 'url(/assets/bg/recording-right.webp)',
        'getit-bg': 'url(/assets/bg/get-it-now.webp)',
        'faqs-bg': 'url(/assets/bg/faqs.webp)',
        'nav-stat-gr':
            'linear-gradient(90deg, #FACFD9 0%, #C772AE 38.79%, #A362A8 99.29%)',
        'hero-span':
            'linear-gradient(79.32deg, #1C1151 14.31%, #654294 54.03%, #D67EBD 97.77%)',
        about:
            'linear-gradient(93.98deg, rgba(37, 27, 104, 0.3) 11.68%, rgba(86, 45, 96, 0.3) 60.33%, rgba(224, 153, 131, 0.3) 98.42%)',
        'slider-item':
            'linear-gradient(13.68deg, rgba(32, 27, 104, 0.6) 4.18%, rgba(86, 45, 96, 0.6) 42.52%, rgba(224, 153, 131, 0.6) 89.37%)',
        'purchase-btn':
            'linear-gradient(180deg, #58A7AE 0%, #54FADC 0.01%, #4CADD5 45.83%, #333997 96.87%)',
        accordion:
            'linear-gradient(269.01deg, #3D234F 11.23%, #110843 55.2%, #221656 94.01%)',
        'accordion-open':
            'linear-gradient(91.93deg, #0B0347 26.95%, #2D2787 61.61%, #50335D 100.88%)',
        'accordion-item':
            'linear-gradient(87.79deg, #0B0347 21.23%, #3F295D 66.83%)',
        span: 'linear-gradient(180deg, #E28E7E 0%, #9D647B 46.35%, #4E2A7B 100%)',
        'span-open':
            'linear-gradient(180deg, #58A7AE 0%, #54FADC 0.01%, #4CADD5 45.83%, #333997 96.87%)',
        footer: 'linear-gradient(180deg, #271A75 0%, #0F073F 100%)',
      },
      fontFamily: {
        'ibm-sans': ['IBM Plex Sans', 'sans-serif'],
        'ibm-mono': ['IBM Plex Mono', 'monospace'],
        'home-baukasten': 'HomepageBaukasten',
      },
      fontSize: {
        hero: ['5.625rem', '6.2156rem'],
        body: ['1.75rem', '2.6875rem'],
        h2: ['2.5rem', '2.75rem'],
        'sub-title': ['26px', '29px'],
      },
      backgroundPosition: {
        'left-top': 'left -19rem top 50rem',
        'left-top-mobile': 'left -20.5rem top 60rem',
        'top-right': 'top 63rem right 0rem',
      },
    },
  },
  plugins: [],
}

