module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.js', './src/components/**/*.js', './src/utils/getTint.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        82: 'repeat(auto-fill, minmax(360px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
