module.exports = {
  preset: 'jest-playwright-preset',
  testTimeout: 50000,
  maxWorkers: 4,
  testMatch: ['**/*.test.js'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        expand: true,
        openReport: true,
      },
    ],
  ],
  testEnvironmentOptions: {
    'jest-playwright': {
      browserName: 'chromium',
      exitOnPageError: false,
      launchOptions: {
        headless: false,
      },
    },
  },
};
