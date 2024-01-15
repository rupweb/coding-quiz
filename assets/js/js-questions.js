const jsQuestions = [
    {
        question: "1. Differentiate between var, let, and const in JavaScript",
        choices: {
            a: "var is block-scoped, let is function-scoped, and const is globally scoped",
            b: "var is function-scoped, let is block-scoped, and const is globally scoped",
            c: "var is globally scoped, let is function-scoped, and const is block-scoped",
            d: "var is globally scoped, let is block-scoped, and const is function-scoped"
        },
        correctAnswer: "b"
    },
    {
        question: "2. Explain event bubbling and event capturing in JavaScript",
        choices: {
            a: "Event bubbling is the process of propagating an event from the target element to its ancestors. Event capturing is the process of propagating an event from the document root to the target element",
            b: "Event bubbling is the process of propagating an event from the document root to the target element. Event capturing is the process of propagating an event from the target element to its ancestors",
            c: "Event bubbling and event capturing are the same thing and can be used interchangeably",
            d: "Event bubbling and event capturing are unrelated to JavaScript events"
        },
        correctAnswer: "a"
    },
    {
        question: "3. What are JavaScript Promises and how do they work?",
        choices: {
            a: "A way to handle synchronous operations in JavaScript. They work by blocking the execution of code until a promise is resolved or rejected",
            b: "A way to handle asynchronous operations in JavaScript. They work by immediately executing asynchronous code and then waiting for it to complete",
            c: "A way to handle asynchronous operations in JavaScript. They work by representing a value (or the eventual result of an operation) that may be available now, or in the future, or never",
            d: "A way to handle synchronous operations in JavaScript. They work by executing code in a non-blocking manner and provide guarantees about the order of execution"
        },
        correctAnswer: "c"
    },
    {
        question: "4. How does 'this' keyword work in JavaScript?",
        choices: {
            a: "It always refers to the current function's scope",
            b: "It refers to the object that contains the current function",
            c: "It refers to the object where it is defined, regardless of how the function is called",
            d: "It's not used in JavaScript"
        },
        correctAnswer: "c"
    },
    {
        question: "5. What are closures in JavaScript, and how would you use them?",
        choices: {
            a: "A way to encapsulate variables and functions into a single object. They are used for code organization and modularity",
            b: "A way to create private variables and functions inside a function. They are used to control access to data",
            c: "A way to define classes and objects in JavaScript. They are used for object-oriented programming",
            d: "A way to optimize code execution by pre-compiling functions. They are used for performance improvements"
        },
        correctAnswer: "b"
    }
];

export { jsQuestions };