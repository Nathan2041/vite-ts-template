// @ts-check

import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import plugin from './eslint-plugin.js';

export default defineConfig(
  [globalIgnores(["dist/"])],
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    plugins: { local: plugin },
    rules: {
      'prefer-const': 'off',
      '@typescript-eslint/prefer-const': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/typedef': 'off',
      'local/explicit-typing': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-implicit-any-catch': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'space-infix-ops': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-debugger': 'off'
    }
  }
);
