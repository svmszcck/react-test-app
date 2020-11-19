# React Test App

You can test the app via this link:

https://loving-hawking-6f947a.netlify.app

**Setup & Running:**

- **npm i**
- **npm start**
- In order to create production build: **npm run build**

(Production build will be in the **build** folder)

<br />

<img src="https://i.ibb.co/rpPDPwh/ss.png" />
<br />
<img src="https://i.ibb.co/kQ0rbhL/ss2.png" />

<br />

# Architecture

I have used **"Container-Presentational Pattern"**. Because I love this pattern as it seperates the business logic from the UI part.

I have also separated services & constants & config variables as separate files.

Let me show the folder structure:

```
src
├── __tests__ => unit tests
│   └── components
│   └── screens
├── app_constants => global constant variables
│   └── api.js
│   └── breakpoint.js
│   └── colors.js
│   └── general.js
├── assets
│   └── styles => scss files
├── components => shared, reusable components
│   └── Card
│   └── ErrorBoundary
│   └── Footer
│   └── index.js
│   └── Layout
│   └── LoadingIndicator
│   └── Navbar
│   └── ScrollTop
│   └── Section
├── pages => routes
│   └── Home
│   └── MovieDetails
│   └── index.js
├── services => api calls
│   └── movie.ts
├── store => state management
│   └── actions
│   └── reducers
│   └── constants.js
│   └── index.js
├── utils => helper functions
│   └── api.ts
│   └── breakpoints.ts
│   └── general.ts
│   └── parsing.ts
│   └── testing.ts
│   └── ui.ts
├── app_config.js => global config variables
├── mocks.js => mocks for the tests
├── router.tsx => global router
├── types.ts => global types

```

# Details

I tried to follow **DRY, SOLID** principles.

I have used caching in a lot of parts with the help of **useMemo, useEffect** hooks.

Common(shared) types are in the **types.ts** file. Component specific types are directly in the component files.

App is responsive. You can test it on mobile screens :)

I have used slug values in the url for better SEO.

I have added a global **Error Boundary** to catch some possible errors in the component tree.

There is an helper component called **ScrollTop.tsx** which scrolls the page to top then the route changes.

I have created a Loading Indicator component while the data is being loaded behind the scenes. For example backdrop images are too big in size, therefore I have created an helper function called **imageAsyncLoader** which waits for the image to be rendered on DOM(It is an async function which returns a promise). Therefore that will prevent flickering etc. in slow networks. You can check it here: **utils/general/general.ts**

In order to run the tests:

**npm run test**

I have added --silent flag to hide possible unwanted warnings. If you want to run a single test, you can do this:

**jest filename.test.js**
