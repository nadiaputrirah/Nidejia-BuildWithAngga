/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundImage:{
        // Hero
        "hero": "linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%), url(/dist/assets/image/bg-hero.png)",
        // Lastest Deal
        "card-deals": "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 45.8%, #050211 86.79%)",
        "house-1": "url('/dist/assets/image/house-1.jpg')",
        "house-2": "url('/dist/assets/image/house-2.jpg')",
        "house-3": "url('/dist/assets/image/house-3.jpg')",
        "house-4": "url('/dist/assets/image/house-4.jpg')",
        // Benefit
        "benefit-1": "url('/dist/assets/image/benefit-1.png')",
        "benefit-2": "url(/dist/assets/image/benefit-2.png)",
        "benefit-3": "url(/dist/assets/image/benefit-3.png)",
        "benefit-4": "url(/dist/assets/image/benefit-4.png)",
        "card-benefit": "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 30.03%, #050211 100%)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: '#000000',
        primary: '#141414',
        secondary: '#323437',
        accent: '#FF9357',
        green: '#1EBA53',
        grayLight: '#A8A8AB',
        darkGray: '#202020',
        secondLight:'#F5F6F8',
        secondDarkGray:'#353535'
      },
      screens: {
				sm: "100%",
				md: "100%",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1280px",
			},
    },
  },
  plugins: [],
}

