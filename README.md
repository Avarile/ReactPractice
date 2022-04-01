# Part one Project Init

=========================

1. first step Always init
```
   npm init --y
```

2. Git init --- well here I already have the git so, no~

3. # Dependency Install

### babel related:

@babel/cli
@babel/core
@babel/preset-env
@babel/preset-react
@babel/preset-typescript
@babel-loader

### webpack related:

webpack
webpack-cli
webpack-dev-server
html-webpack-plugin
clean-webpack-plugin
css-loader
style-loader
file-loader

### react related

react
react-dom
react-roouter-dom

### typescript related

typescript
typescript-plugin-css-modules

### dependencies

@types/react
@types/react-dom
react-dev-utils
resolve-url-loader
webpack-merge

### above is the basic dependency after this all developing dependency which varies from project to project so ~~~ will not be specified.

4.  init typescript
```
    npx tsc --init
```

5.  init the entrance Html.
    mkdir htmlEntrance
    touch index.html

    in index.html input ! then wait for functional syntax, after that press enter
    create a div like this in the body as entrance of the entire project into the html like this:
```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root" />
  </body>
</html>
```
6. Now here we go with the src/
  
```
  mkdir src
  touch App.tsx
```
```
#App.tsx

import React from "react";

export default () => {
  return (
    <div className="content">
      Hello
      <RouterComp />
    </div>
  );
};
```


7. setUp the tsconfig.json
  
  ```
    {
      "compilerOptions": {
        /* Visit https://aka.ms/tsconfig.json to read more about this file */

        /* Language and Environment */
        "target": "es2016"                                /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
        "lib": ["DOM", "DOM.Iterable", "ESNext"]          /* Specify a set of bundled library declaration files that describe the target runtime environment. */,
        "jsx": "react-jsx"                                /* Specify what JSX code is generated. */,
        "experimentalDecorators": true                    /* Enable experimental support for TC39 stage 2 draft decorators. */,

        /* Modules */
        "module": "esnext"                                /* Specify what module code is generated. */,
        "moduleResolution": "node"                        /* Specify how TypeScript looks up a file from a given module specifier. */,
        "baseUrl": "./"                                   /* Specify the base directory to resolve non-relative module names. */,
        "paths": {
          "@DATA-CONTROLLER/*": ["src/data/dataController/*"],
          "@DATA-STORE/*": ["src/data/dataStore/*"],
          "@COMMON/*": ["src/commom/*"],
          "@ROUTES/*":["src/routes/*"],
          "@SRC/*":["src/*"],
          "@API/*":["src/data/api/*"]
        },                                                /* Specify a set of entries that re-map imports to additional lookup locations. */
        
        /* JavaScript Support */
        "allowJs": true                                   /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */,

        /* Emit */
        // "outDir": "./",                                /* Specify an output folder for all emitted files. */
        "noEmit": true                                    /* Disable emitting files from a compilation. */,
        "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */

        /* Interop Constraints */
        "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
        "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
        "esModuleInterop": true                           /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
        "forceConsistentCasingInFileNames": true          /* Ensure that casing is correct in imports. */,

        /* Type Checking */
        "strict": true                                    /* Enable all strict type-checking options. */,
        "noImplicitThis": true                            /* Enable error reporting when `this` is given the type `any`. */,

        /* Completeness */
        "skipLibCheck": true                              /* Skip type checking all .d.ts files. */
      }
    }
  ```


8. setup the package.json
  ```
    
{
  "name": "ReactPractice",
  "version": "1.0.0",
  "description": "=========================",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "cross-env NODE_ENV=development webpack-dev-server --config ./config/webpack.config.js --open --mode=development",
    "build": "cross-env NODE_ENV=production webpack --config ./config/webpack.config.js --mode=production",
    "debugStart": "cross-env NODE_ENV=development node --inspect-brk ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config ./config/webpack.config.js --open --mode=development",
    "debugBuild": "cross-env NODE_ENV=production node --inspect-brk ./node_modules/webpack/bin/webpack.js --config ./config/webpack.config.js --mode=production"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Avarile/ReactPractice.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Avarile/ReactPractice/issues"
  },
  "homepage": "https://github.com/Avarile/ReactPractice#readme",
  "dependencies": {
    "@babel/cli": "^7.17.6",
    "@babel/core": "^7.17.8",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "@babel/preset-typescript": "^7.16.7",
    "babel-loader": "^8.2.4",
    "clean-webpack-plugin": "^4.0.0",
    "cross-env": "^7.0.3",
    "css-loader": "^6.7.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "install": "^0.13.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.2",
    "style-loader": "^3.3.1",
    "typescript": "^4.6.3",
    "typescript-plugin-css-modules": "^3.4.0",
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  },
  "devDependencies": {
    "@types/react": "^17.0.43",
    "@types/react-dom": "^17.0.14",
    "react-dev-utils": "^12.0.0",
    "resolve-url-loader": "^5.0.0",
    "webpack-merge": "^5.8.0"
  }
}


  ```


9. start to bootstrap the React App

```
touch src/App.tsx


```
import React from "react";
import RouterComp from "./routes";

export default () => {
  return (
    <div className="content">
      Hello
      <RouterComp />
    </div>
  );
};

```
touch src/index.tsx
// init the index.tsx as well as the React router
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


```

```
touch src/routes.tsx
//  init the routes config
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Login, Center, NotFund } from "./pages";
type FallbackComponentT =
  | boolean
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | null;
type ChildComponentT = React.LazyExoticComponent<() => JSX.Element>;

// setup async component' loading procesure
const SuspenseWrapper = (Child: ChildComponentT, FallbackComponent?: FallbackComponentT) => {
  return (
    <React.Suspense fallback={FallbackComponent || <>...</>}>
      <Child />
    </React.Suspense>
  );
};
export default () => {
  return useRoutes([
    {
      path: "/center",
      element: SuspenseWrapper(Center),
      children: [
        {
          path: "/center",
          element: SuspenseWrapper(Center),
        },
      ],
    },
    {
      path: "/",
      element: SuspenseWrapper(Login),
    },
    {
      path: "/404",
      element: SuspenseWrapper(NotFund),
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

```

10. Webpack Settings






















### State managment design
