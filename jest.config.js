module.exports = {
  'verbose': true,
  'testURL': 'http://rails-vue3.test/',
  'roots': [
    'spec/javascript'
  ],
  'moduleDirectories': [
    'node_modules',
    'app/packs'
  ],
  'moduleNameMapper': {
    '^@/(.*)$': '<rootDir>/app/packs/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/spec/javascript/__mocks__/fileMock.js',
  },
  'moduleFileExtensions': [
    'js',
    'json',
    'vue'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  'snapshotSerializers': [
    '<rootDir>/node_modules/jest-serializer-vue'
  ]
}
