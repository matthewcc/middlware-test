This is a minimum reproduction of a routing/localizaton issue with middleware.js. It was made with  [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

If `skipMiddlewareUrlNormalize` in next.config.js is set to `true`, the value of `nextUrl.locale` in middlware.js is inaccurate while doing client site routing. It always shows the default locale.

To reproduce:

1. Download this project, `npm install`, `npm run dev`, go to [http://localhost:3000](http://localhost:3000)
2. Navigate through the pages and locales using the links on the page
3. Note that while navigating with the link or with the browser back/forward buttons, the CLI log from the middleware.js will show the default locale for `nextUrl.locale` (i.e., "en-US"), though the correct locale is part of the path `nextUrl.pathname`. 