// // @ts-check
// import eslint from "@eslint/js";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// import globals from "globals";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//   {
//     ignores: ["eslint.config.mjs"],
//   },
//   eslint.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,
//   eslintPluginPrettierRecommended,
//   {
//     languageOptions: {
//       globals: {
//         ...globals.node,
//         ...globals.jest,
//       },
//       sourceType: "commonjs",
//       parserOptions: {
//         projectService: true,
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },

//   {
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/no-floating-promises": "warn",
//       "@typescript-eslint/no-unsafe-argument": "warn",
//       // Prettier integration will not show [eslint] Delete `CR` `--` [prettier/prettier]
//       "prettier/prettier": [
//         "off",
//         {
//           endOfLine: "auto",
//         },
//       ],
//     },
//   },
// );
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Required for rules like no-unsafe-assignment
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Recommended TS rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // Stricter rules like no-unsafe-assignment
  ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      // Prettier integration will not show [eslint] Delete `CR` `--` [prettier/prettier]
      "prettier/prettier": [
        "off",
        {
          endOfLine: "auto",
        },
      ],
    },
};
