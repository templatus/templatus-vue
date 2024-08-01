import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '5d6bqs',
  screenshotsFolder: 'tmp/cypress_screenshots',
  trashAssetsBeforeRuns: false,
  videosFolder: 'tmp/cypress_videos',
  fixturesFolder: 'spec/cypress/fixtures',
  downloadsFolder: 'spec/cypress/downloads',
  e2e: {
    baseUrl: 'https://templatus-vue.test',
    specPattern: 'spec/cypress/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'spec/cypress/support/index.js',
  },
});
