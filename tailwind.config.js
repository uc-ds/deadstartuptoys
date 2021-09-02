module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,vue}", "./src/components/**/*.{js,ts,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#1A1A1A",
        shadow: "#332D26",
        blue: "#1E63D6",
      },
      fontSize: {
        "110px": "110px",
        "56px": "56px",
      },
      dropShadow: {
        text: "3px 3px 10px rgba(0, 0, 0, 0.25)",
        "text-dense": "-1px 1px 1px rgba(255, 255, 255, 0.5);",
      },
      boxShadow: {
        main: "3px 3px 10px rgba(0, 0, 0, 0.1)",
      },
      minHeight: {
        "580px": "570px",
        "380px": "380px",
        "190px": "190px",
      },
      height: {
        "450px": "450px",
        "500px": "500px",
        "100px": "100px",
      },
      width: {
        "400px": "400px",
        "300px": "300px",
        "260px": "260px",
        "360px": "360px",
      },
      borderRadius: {
        "20px": "20px",
      },
      inset: {
        "1/5": "20%",
      },
      borderColor: {
        secondary: "#D9D9D9",
        "black-light": "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
