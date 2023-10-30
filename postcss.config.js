module.exports = {
  plugins: {
    tailwindcss: {},
    cssnano: {
      preset: [
        "advanced", {
          discardComments: {
            removeAll: true
          },
          autoprefixer: {
            add: true
          }
        }
      ]
      
    },
    "postcss-variable-compress": {}
  },
}
