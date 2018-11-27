module.exports = {
  testURL: 'http://localhost/',
  setupFiles: [
    '<rootDir>/tests/setup.js',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  }
};
