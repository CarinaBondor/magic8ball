import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
    { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
    { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
    { files: ["**/*.{js,mjs,cjs,ts,vue}"], plugins: { js }, extends: ["js/recommended"] },
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"],
    { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
    { plugins: ["html", "css", "import"] },
    {
        rules: {
            // JavaScript double indentation (4 spaces)
            indent: ["error", 4], // Enforce 4-space indentation
            "no-tabs": "error", // Disallow tabs (important when using spaces)

            // CSS double indentation (4 spaces)
            "css/indent": ["error", 4], // Enforce 4-space indentation for CSS
        },
    },
    {
        overrides: [
            {
                files: ["*.html"],
                parser: "html-eslint-parser",
            },
            {
                files: ["*.css"],
                rules: {
                    "css/no-duplicate-properties": "error",
                },
            },
        ],
    },
]);
