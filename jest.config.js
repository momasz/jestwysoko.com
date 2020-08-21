module.exports = {
  testMatch: ['<rootDir>/tests/**/*.test.js', '<rootDir>/src/**/*.test.js'],
  setupFiles: ['<rootDir>/tests/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true
};
