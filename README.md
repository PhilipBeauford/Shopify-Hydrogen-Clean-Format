# Clean Hydrogen App

A cleaner less restricting code base for starting a Shopify Hydrogen build.
I need 2 line spacing sometimes to see code legibly.. so sue me lol :)

Also re-wrote several functions as their own components.
I personally prefer a single default function export in most React components.

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

## Getting started

**Requirements:**

- Node v14+
- Yarn

```bash
yarn
yarn dev
```

Remember to update `shopify.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
yarn build
```

Then, you can run a local `server.js` using the production build with:

```bash
yarn serve
```
