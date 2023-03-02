export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '\\.[jt]s?$': ['ts-jest', { tsconfig: { allowJs: true } }],
  },
};
