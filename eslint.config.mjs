import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Keep Next.js + TypeScript defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Add custom rules here
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // already present
      "@next/next/no-img-element": "off", // disable Next.js <img> warning
    },
  },
];

export default eslintConfig;
