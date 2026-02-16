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

| Point | Monolith | Microservice Architecture |
|-------|----------|----------------------------|
| **Single Responsibility** | There is one large code base where all the services are coupled together, so no SRP concept. | The code base is split among multiple services, each service having its own single responsibility. |
| **Deployment** | Need to re-deploy the entire bulky code even on small changes in the app. | Each small microservice is independently deployable, so faster and more frequent release cycles. |
| **Difficulty in Changing** | A single small change in the app requires the entire big project to be built and compiled again. | Since each microservice is independent, we need not rebuild the entire project. |
| **Flexibility** | The technology/tech stack has to be the same throughout the whole project. Also use the same tech as used already in monolith. | Each team can choose the tech stack for each microservice, so no restrictions. |
| **Development Speed** | A large monolithic app makes development more complex and slow. | Each service is independently developed, so easy and quick development. |

