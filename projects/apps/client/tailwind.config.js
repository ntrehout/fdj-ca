const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../../libs/components/src/**/!(*.stories|*.spec).{ts,html}'), // TODO: Remove when createGlob is fixed.
    ...createGlobPatternsForDependencies(__dirname), // TODO: Find why libs-components is not considered as a dependency.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
