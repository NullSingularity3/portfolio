# Notes

## Astro setup

[Astro Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

```
.
├── assets
│   ├── astro.svg
│   └── background.svg
├── components
│   └── Welcome.astro
├── layouts
│   └── Layout.astro
└── pages
    └── index.astro
```

## .astro

- Html + JS metadata
- JS encapsulated between "---"

e.g. `/src/pages/index.astro`

```
---
import Welcome from '../components/Welcome.astro';
import Layout from '../layouts/Layout.astro';

// Welcome to Astro! Wondering what to do next? Check out the Astro documentation at https://docs.astro.build
// Don't want to use any of this? Delete everything in this file, the `assets`, `components`, and `layouts` directories, and start fresh.
---

<Layout>
	<Welcome />
</Layout>
```

## Font

```
npm install @fontsource-variable/roboto
```

## Add

```
npx astro add react
npm install astro-stylex @stylexjs/stylex

```