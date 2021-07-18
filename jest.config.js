module.exports = {
  verbose: true,
  testURL: 'https://templatus.test/',
  roots: ['spec/packs'],
  moduleDirectories: ['node_modules', 'app/packs'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/packs/src/$1',
    '^@test/(.*)$': '<rootDir>/spec/packs/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/spec/packs/__mocks__/fileMock.js',
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  preset: 'ts-jest',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': 'vue3-jest',
  },
  testEnvironment: 'jsdom',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
};
