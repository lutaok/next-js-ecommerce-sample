# NextJS E-Commerce Sample

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone the repository and run `npm install` on the terminal.

When everything's done start the development server with the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Highly recommend to enable `Prettier` format on save feature. If that's not the case you can manually run

```bash
npm run format:fix
```

to make `Prettier` format every file in the project

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

This project also uses [Material UI](https://mui.com/) as a component library and interacts with [DummyJSON](https://dummyjson.com/) [Products](https://dummyjson.com/docs/products) and [Carts](https://dummyjson.com/docs/carts) APIs.

## Build & Preview

You can build the project running the following command:

```bash
npm run build
```

when the build is done you can preview the generated outcome using:

```bash
npm run start
```

## Main Takeaways

- Specified `"use client"` directive on small components in order to take advantage of Server Side Rendering and minimize hydration.
- Split Context into StateHolder and Dispatcher in order to minimize tree rerendering when cart changes (API design prevents it to be beneficial).
- Page level error handling can be delegated to the root `error.{jsx | tsx}` file to have a unified error page.
- MUI overrides system is powerful but tedious. Could take some time to optimize.

## Known Issues

- NextJS 14.2.1 isn't fully compatible with MUI on SSR pages, while NextJS 14.1.1 is.
- Files mix between CSS Modules, MUI system overrides and inline styling
- `USER_ID` is 3, there are IDs with no carts and creating a cart would result in errors when updating it (API Design). Highly recommend to stick with `USER_ID = 3`

## TODOs

- CSS Theming and Light/Dark mode
- Integration Tests
- End to end Tests
- Error handling with Alerts when adding products to cart
- Runtime API data validation with Zod or similar

## Summary

Altough it is far from completed or optimized, it was a fun project to build that spun over a lot of technical aspects of ReactJS, NextJS and MUI.
I expanded my knowledge on component libraries usage and also found limitations (NextJS 14.2.1) I wasn't expecting to find.
I also integrated with `DummyJSON` APIs that, since it didn't maintain server state, it made me fully manage data on client side.

I feel like I didn't use every NextJS feature that could benefit this use case so let me know in the issues section what can be better to use.

**Thanks for reading!**
