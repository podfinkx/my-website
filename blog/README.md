# NextJS Starter with TailwindCSS + Emotion
This is a Nextjs starter with tailwindcss + emotion for styling your pages and some formatting and linting goodies

## Features
This starter includes the following features:
* Next SEO
* TailwindCSS + Emotion 
* Google Fonts
* React Icons
* eslint + airbnb style plugin (code linting)
* prettier (code formatting)


### Todo
- [x] Basic setup
- [x] Tailwind config
- [x] PostCSS config
- [x] .eslintrc.js
- [x] .prettierrc


<details>
<summary>Install deps on your own starter</summary>
<p>

```bash
# tailwindcss + emotion styled components
yarn add -D tailwindcss twin.macro postcss-preset-env @emotion/core @emotion/styled

# eslint + prettier
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

# eslint airbnb
npx install-peerdeps --dev eslint-config-airbnb
```

</p>
</details>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
