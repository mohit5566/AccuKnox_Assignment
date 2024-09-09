// playwright.config.js
module.exports = {
    testDir: './tests',
    timeout: 300000,
    expect: {
      timeout: 50000
    },
    reporter: 'list',
    use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
    },
  };
  