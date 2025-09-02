/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}"
],
theme: {
extend: {
colors: {
gold: "#eabe7b"
},
fontFamily: {
dm: ["DM Serif Display", "serif"],
public: ["Public Sans", "system-ui", "sans-serif"]
}
}
},
plugins: []
}