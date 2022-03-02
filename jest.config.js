// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    // eslint-disable-next-line unicorn/prefer-module
    ...require("./jest/jest.config"),
    coverageThreshold: {
        global: {
            statements: 60,
        },
    },
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/*.d.ts",
        "!**/*.dts.ts",
        "!**/theme-styles.ts",
        "!**/styles.ts",
        "!**/__mocks__/**",
        "!**/__tests__/**",
        "!**/__dts__/**",
        "!**/__fixtures__/**",
        "!website/**",
    ],
    coverageReporters: ["json", "lcov", "text-summary", "clover"],
    collectCoverage: true,
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
    testRunner: "jest-circus/runner",
    testPathIgnorePatterns: ["/node_modules/"],
};
