<h1 align="center">
  Client side route
</h1>

<p>  This app uses react router elements. This app is an improved version of the app created by <a href="https://github.com/search?p=1&q=David+Starr&type=Repositories"> David Starr </a> in his react router course. This demo can be viewed on the url of the description, usign apache server.
</p>

## What's the different from the original project?

All packages are up to date. Webpakc.config.js was modified in order to test the app in different enviroments: local on the computer, using any local server like wamp or any server. Styles has
also been changed and responsive design was taken into account too.

## What's inside?

A quick look at the top-level files and directories you'll see in the project is:

    .
    ├── assets
    ├── src
    ├── .babelrc
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── webpack.config.js

##  Quick start

Before running any script consider define the env variables: PUBLIC_URL, PUBLIC_URL_LOCALSERVER, SUBDIRECTORY and LOCALSERVER. For development mode using webpack-dev-server the app runs on port 8080.

To run locally, build the app for development executing the following commands. Be sure LOCALSERVER variable in .env.development is equal to f. If you have knowledge using wamp server consider to change
the env values and change LOCALSERVER to any other value different from f.

    ```shell
    npm run build:dev
    npm run dev-server
    ```

## Deploy

  To build for production, you must follow the following steps:
        
  ```shell
  npm run build:prod
  ```
Before building for production you have to define .env variables: PUBLIC_URL and SUBDIRECTORY as you need it and do the same step for homepage variable in package.json, then you can copy all the files generated inside public folder in your hosting provider.

The applicacion can be viewed on [clicking here](http://www.ventoji.es/demos-react/client-side-route/) using apache server. If you want to use this app you have to take care of .env file modifying it as you need to.

## Why this app can be useful?

You can easily adapt this app to build your own using react router (BrowserRouter, withRouter), in App.js you can see how to create different types of routes. Webpack is configured to use SASS, LESS preprocesor to define your own styles or you can use react-bootstrap, bootstrap libraries to build your components and give style to the layout. It can be a starting point for react beginners.    