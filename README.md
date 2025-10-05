NOTE: do not copy anything from package.json to the generated package.json other than "scripts": {...} and "type": "module"
NOTE: only put in eslint-plugin.js and eslint.config.mjs if you are installing eslint and typescript-eslint

# Installation

npm i -D vite typescript @types/node

### Optional

npm i -D ts-pattern eslint @eslint/js typescript-eslint chalk

# Usage

npm run dev

This runs your project at dev time

npm run build

This builds your project into the dist/ folder

npm run preview

This previews your project build

### Optional

npx eslint .

This runs eslint on your project

In script.ts, you can

import { match, P } from 'ts-pattern'
import { Chalk } from 'chalk'
