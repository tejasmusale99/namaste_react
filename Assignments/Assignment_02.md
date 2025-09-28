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

### 4. What is 'npx'?

- npx is a package executer. It is used to execute packages. If the package is not present locally, then it installs prior to the execution.

### 5. What is difference between 'dependencies' vs 'Devdependencies'?

- There are 2 types of dependencies: normal dependencies and dev dependencies

- **Normal Dependencies** : The ones which our project require in all the phases of the project ie. (used in development and production also). Such dependencies are put into the "dependencies" key of the package.json.

- **Dev Dependencies**: They are the ones which our project requires just in the development phase. Such dependencies are put into the "devDependencies" key of the package.json. (Example Parcel)

- In our React project, we install **parcel as a devDependency** since npm knows parcel is required at development phase to bundle the code, not at production, because bundling should be done before production.
