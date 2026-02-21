### Q1. Types of Testing

- Unit Testing
- Integration Testing
- End-to-End Testing (e2e testing)

  **Unit Testing**
  - Unit Testing is a fundamental aspect of software testing
    where individual components or functions of an application
    are tested in isolation.
  - This method ensures that each unit of the application
    performs as expected.
  - By focusing on small, manageable parts of the application,
    unit testing helps identify and fix bugs early in the
    development process, significantly improving code quality
    and reliability.
  - Unit tests are typically automated and written by
    developers.

  **Integration Testing**
  - Integration testing is a software testing process where
    software components, modules, or units are tested to
    evaluate system compliance concerning functional
    requirements.
  - This testing phase is crucial to ensure seamless interactions
    among various units/components, their functionalities and
    how well they can operate as a single entity.

  **End-to-End Testing**
  - In e2e testing, the application is tested from the moment
    the user starts using the application to the moment user
    leaves the application.
  - In this testing, we test the complete flow of the application
    from beginning to the end.

### Q2. What is Jest and why do we use it?

- Jest is a popular JavaScript testing framework developed by Facebook. It's widely used for testing JavaScript code, particularly in the context of React applications. Here's why we use Jest:

- **Simplicity:** Jest is designed to be easy to set up and use, with minimal configuration required.
- **Zero Configuration:** It comes pre-configured with sensible defaults, reducing the need for complex setup.
- **Fast and Parallel Execution:** Jest is optimized for speed, featuring parallel test execution and intelligent test running, which help reduce overall test suite execution time.
- **Snapshot Testing:** Jest has built-in support for snapshot testing, allowing you to capture snapshots of your code's output and compare them to ensure they haven't changed unexpectedly.
- **Mocking:** Jest provides powerful mocking capabilities, making it easy to mock dependencies, modules, and functions for testing components and modules in isolation.
- **Assertion Library:** It comes with its own assertion library, simplifying the writing of clear and expressive test assertions without additional dependencies.
- **Integration with React:** Jest integrates well with React applications and provides additional utilities specifically for testing React components, such as React Testing Library.
