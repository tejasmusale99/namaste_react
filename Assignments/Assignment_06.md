### Q1. What is Microservices Architecture?

- A Microservice is an independently existing service in Microservice architecture.
- Each microservice is independently deployable. and has its own business logic.
- Each microservice has its own single responsibility and exists independently in Microservice Architecture.
- Updating, testing, deploying everything occurs within each microservice.

### Q2. What is Monolithic Architecture?

- A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together.
- To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the server-side interface.
- This makes updates restrictive and time consuming.
- All the code of various services is in the same single project and we need to be deploy the whole BULKY project.

### Q3. What is the difference between Monolith and Microservice?

# 3. Monolith vs Microservice?

| Point                      | Monolith                                                                                                                       | Microservice Architecture                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Single Responsibility**  | There is one large code base where all the services are coupled together, so no SRP concept.                                   | The code base is split among multiple services, each service having its own single responsibility. |
| **Deployment**             | Need to re-deploy the entire bulky code even on small changes in the app.                                                      | Each small microservice is independently deployable, so faster and more frequent release cycles.   |
| **Difficulty in Changing** | A single small change in the app requires the entire big project to be built and compiled again.                               | Since each microservice is independent, we need not rebuild the entire project.                    |
| **Flexibility**            | The technology/tech stack has to be the same throughout the whole project. Also use the same tech as used already in monolith. | Each team can choose the tech stack for each microservice, so no restrictions.                     |
| **Development Speed**      | A large monolithic app makes development more complex and slow.                                                                | Each service is independently developed, so easy and quick development.                            |

### Q4. Why do we need a useEffect Hook?

- useEffect() hook is another utility function provided by React
- It takes 2 parameters: callback function and dependency array(this is optional parameter).
- The useEffect() is used to handle the side effects such as fetching data and updating the DOM.
- This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering.
- Mostly, we make some API call in it because that is a side-effect. The API call can affect the UI of our app, so we don't want it to interfere with the rendering of the UI.

### Q5. What is optional chaining ?

- It is a JS concept wherein we use the '?.' operator while reading some property from an object or calling a function.
- It is helpful when there is a possibility that a reference might be missing.
- If the object accessed/ function called evaluates to null/undefined, the expression shortcircuits and evaluates to undefined rather than throwing an error.
- Eg: const a = obj.first?.second;
- Here JS implicitly checks that obj.first is not null or undefined before attempting to access obj.first.second. If obj.first is null or undefined, then the entire expression is short-circuited and evaluated to undefined, thus a = undefined

### Q6. What is Shimmer UI?

- When the page loads and the data is being fetched, until the data
  is displayed on the UI, instead of showing a spinner, we can show
  the skeleton of the UI.
- It is makes our app-loading state visually good since we don't shock the user suddenly with all the UI, rather we prepare them for what layout is coming on the screen.

### Q7. How can we change the state variable even if it is defined as a constant ?

- Consider we have a button element on clicking of which the state
  variable changes.
- A state variable always has an initial value.
- Whenever a state variable updates, React triggers a
  Reconciliation cycle i.e. React re-renders the component.
- And when the component re-renders, the state variable will have
  the updated value as its default value.

  ### Q8. What is Conditional Rendering? Explain with a code example.

- Conditional rendering involves displaying different content or components based on certain conditions or criteria in an application.
- It allows developers to dynamically control what appears on the screen depending on the state of the application or specific variables.

```html
import React from "react";

function ExampleComponent({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
}
```
- In this example, the component ExampleComponent renders different messages based on the value of the isLoggedIn prop. If isLoggedIn is true, it displays "Welcome back!", otherwise, it shows "Please log in."

 ### Q9. What is the CORS?
 - It stands for Cross-Origin Resource Sharing.
 - Browsers do not allow us to call an API present on other origin from our origin. This is a web standard that makes resource sharing safe.
- So, when we attempt to access a resource present on another origin from our origin, the browser imposes a CORS policy and blocks us from doing so.
- Another origin means: another Domain/Port/Protocol.
- The origin A(browser) sends a pre-flight request to the origin B(server) before actually making the API call for fetching the resource.
- o the server then sends back additional HTTP Headers to the browser using which browser knows whther or not resource sharing is safe.
- After this verification, the actual API call is made from the browser.
- Additional HTTP headers are: Access-Control-Allow-Origin, Accept-Control-Allow-Methods etc.