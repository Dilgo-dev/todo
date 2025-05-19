import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node
      }
    },
    plugins: {
      stylistic: stylistic
    },
    rules: {
      "no-console": ["warn", { allow: ["info", "warn", "error"] }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-duplicate-imports": "error",
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-use-before-define": ["error", { functions: false }],
      "no-return-await": "error",
      "require-await": "error",
      "no-throw-literal": "error",
      "no-param-reassign": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "no-trailing-spaces": "error",
      "eqeqeq": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],

      "stylistic/semi": ["error", "always"],
      "stylistic/quotes": ["error", "single"],
      "stylistic/comma-dangle": ["error", "only-multiline"],
      "stylistic/max-len": ["error", { code: 100, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
      "stylistic/indent": ["error", 2],
      "stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "stylistic/comma-spacing": ["error", { before: false, after: true }],
      "stylistic/object-curly-spacing": ["error", "always"],
      "stylistic/arrow-spacing": ["error", { before: true, after: true }],
    }
  },
  {
    files: ["**/*.test.{js,mjs}", "**/__tests__/**"],
    rules: {
      "no-console": "off",
      "require-await": "off"
    }
  },
  {
    files: ["eslint.config.js", "*.config.{js,mjs}"],
    rules: {
      "no-console": "off"
    }
  }
]);