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
    '^@/(.*)$': '<rootDir>/app/packs/src/$1'
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
