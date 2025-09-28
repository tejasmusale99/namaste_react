## Assignment 2

### 1. What is NPM?

- npm is a package manager that manages all the packages. It can be thought of as a huge registry or repository of packages.
- It does NOT stand for Node Package Manager.

### 2. What is 'Parcel/Webpack'? Why do we need it?

- Parcel, Webpack, Vite are some of the Bundlers used to bundle the code before building dev and prod build.
- A bundler minifies, compresses, bundles up the code before shipping the code to production.
- We need a bundler because if we send the entire code as it is, in the form of those multiple js, html, css files, this is really not optimum coz the browser needs to make lots of network calls to fetch all these numberous files. So instead, bundling up the code generates a limited no. of files to be fetched. This makes our app faster and more lightweight.

### 3. What is '.parcel-cache'?

- One of the superpowers of Parcel is to do caching. So it Caches the code and places it in the '.parcel-cache' folder.
- This provides faster builds to us. Everytime we re-build the app, it takes lesser time than previous build since the code is already cached and only the changes need to be reflected in that code. There is no need to re-build the entire app from scratch
