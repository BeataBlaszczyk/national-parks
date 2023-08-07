module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',

  globals: {
    'ts-jest': {
        tsconfig: '<rootDir>/test/tsconfig.json',
    },
},
transformIgnorePatterns: [
    "node_modules/(?!troublesome-dependency/.*)",
],
}
