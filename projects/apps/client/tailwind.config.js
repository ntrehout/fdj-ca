const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(
      __dirname,
      '../../../libs/components/src/**/!(*.stories|*.spec).{ts,html}'
    ), // TODO: Remove when createGlob is fixed.
    ...createGlobPatternsForDependencies(__dirname), // TODO: Find why libs-components is not considered as a dependency.
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1250px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('daisyui')],
};
