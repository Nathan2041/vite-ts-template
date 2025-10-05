NOTE: do not copy anything from package.json to the generated package.json other than "scripts": {...} and "type": "module"

NOTE: only put in eslint-plugin.js and eslint.config.mjs if you are installing eslint and typescript-eslint

# Installation

clone this project. Then run this in the terminal if you have node installed. Otherwise, install Node.js if you have Homebrew. via https://treehouse.github.io/installation-guides/mac/node-mac.html.

If you do not have homebrew, do this https://treehouse.github.io/installation-guides/mac/homebrew. For this, you need XCode. If you do not have XCode, install this https://apps.apple.com/us/app/xcode/id497799835?ls=1&mt=12

 

Run these commands in the VSCode terminal once you installed Node.js

npm init -y

npm i -D vite typescript @types/node

### Optional

npm i -D ts-pattern eslint @eslint/js typescript-eslint chalk

If you installed eslint, also get this extension https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

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
