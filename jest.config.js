module.exports = {
  testMatch: ['<rootDir>/tests/**/*.test.js', '<rootDir>/src/**/*.test.js'],
  setupFiles: ['<rootDir>/tests/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/.tools/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/.tools/assetsTransformer.js'
  }
};
