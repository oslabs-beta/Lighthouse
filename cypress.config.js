module.exports = {
  baseUrl: "http://localhost:3000",
  integrationFolder: "cypress/e2e",
  fixturesFolder: "cypress/fixtures",
  supportFile: "cypress/support/index.js",
  video: true,
  screenshotOnRunFailure: true,
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    runMode: 2,
    openMode: 0
  },
  ignoreTestFiles: "**/*.md",
  fileServerFolder: "."
};
