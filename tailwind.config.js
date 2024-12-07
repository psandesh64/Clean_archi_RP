/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'mobile':{'max':'440px','min':'0px'},
        'min-mobile':{'min':'440px'},
        'sc_md':{'max':'768px','min':'440px'},
        'sc_lg':{'max':'1024px','min':'768px'},
        'max-sm':{'max':'640px'},
        'max-md':{'max':'768px'},
        'max-lg':{'max':'1024px'},
        'max-xl':{'max':'1280px'},
      },
      colors: {
        erp: "#1A7338",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        plus_jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [
  ],
}