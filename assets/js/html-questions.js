const htmlQuestions = [
    {
        question: "1. What is the purpose of <!DOCTYPE html> in an HTML document?",
        choices: {
            a: "Used to include external JavaScript libraries in an HTML document",
            b: "Specifies the character encoding of the HTML document",
            c: "Defines the structure and layout of the HTML document, including the placement of elements",
            d: "Declares the document type and version of HTML being used, helping browsers render the page correctly"
        },
        correctAnswer: "d"
    },
    {
        question: "2. How does a span tag differ from a div tag?",
        choices: {
            a: "<span> is used for grouping and styling inline elements, while <div> is used for creating block-level containers",
            b: "<span> is used for creating block-level containers, while <div> is used for grouping and styling inline elements",
            c: "<span> and <div> are interchangeable and can be used for the same purposes",
            d: "<span> and <div> both create inline-level elements, and there is no difference between them"
        },
        correctAnswer: "a"
    },
    {
        question: "3. Explain the concept of semantic HTML and its benefits",
        choices: {
            a: "Refers to using HTML tags for formatting and styling purposes, leading to improved visual design",
            b: "Refers to using HTML tags that carry meaning and represent the structure of the content, making it more meaningful and accessible",
            c: "A type of HTML that focuses on animation and interactivity, enhancing user engagement",
            d: "A deprecated concept in modern web development and is no longer relevant"
        },
        correctAnswer: "b"
    },
    {
        question: "4. What are data attributes in HTML, and how would you use them?",
        choices: {
            a: "Used to store sensitive data in HTML documents securely. They are added as attributes to elements and can be accessed using JavaScript",
            b: "Used to enhance the visual appearance of elements in HTML documents by specifying custom styles. They are added as attributes to elements and provide styling information",
            c: "Custom attributes added to HTML elements to store extra information that can be used by JavaScript or CSS. They are prefixed with `data-` and can hold any data",
            d: "A deprecated feature in HTML and are no longer supported in modern web development"
        },
        correctAnswer: "c"
    },
    {
        question: "5. How do you optimize a website's assets/loading performance in HTML?",
        choices: {
            a: "By using inline styles and scripts to reduce external requests",
            b: "By minifying and compressing files, leveraging browser caching, and using a content delivery network (CDN)",
            c: "By using larger and higher-quality images to improve visual appeal",
            d: "It's not possible, as HTML has no impact on performance"
        },
        correctAnswer: "b"
    }
];

export { htmlQuestions };