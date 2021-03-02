module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },

  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: './src/setupEnzyme.ts',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: { "\\.(css)$": "identity-obj-proxy" }
};
