import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      stylistic: stylistic
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-duplicate-imports": "error",
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-use-before-define": ["error", { functions: false }],

      "no-alert": "warn",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      
      "eqeqeq": ["error", "always"],
      "no-throw-literal": "error",
      "no-param-reassign": "error",
      "prefer-template": "error",
      "arrow-body-style": ["error", "as-needed"],
      
      "stylistic/semi": ["error", "always"],
      "stylistic/quotes": ["error", "single"],
      "stylistic/comma-dangle": ["error", "only-multiline"],
      "stylistic/max-len": ["error", { code: 100, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
      "stylistic/indent": ["error", 4],
      "stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "stylistic/comma-spacing": ["error", { before: false, after: true }],
      "stylistic/object-curly-spacing": ["error", "always"],
      "stylistic/arrow-spacing": ["error", { before: true, after: true }],
      "stylistic/no-multi-spaces": "error",
      "stylistic/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "stylistic/no-trailing-spaces": "error"
    }
  }
]);