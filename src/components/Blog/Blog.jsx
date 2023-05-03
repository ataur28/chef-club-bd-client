import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='banner'>
                <h1 className='banner-title'>Blog</h1>
            </div>
            <h2>Question and Answer </h2>
            <div className='question-answer'>
                <h3>Question-1: Tell us the differences between uncontrolled and controlled components?</h3>
                <p>Answer:
                    <li>Uncontrolled components are those that operate independently and can modify data or state without external regulation or constraints, potentially leading to unexpected behavior.</li>
                    <li>Controlled components, on the other hand, are designed to operate within predefined boundaries and under the guidance of external constraints, ensuring predictable and consistent behavior.</li>

                </p>
            </div>
            <div className='question-answer'>
                <h3>Question-2: How to validate React props using PropTypes?</h3>
                <p>Answer: To validate React props using PropTypes, import the PropTypes library from the 'prop-types' package, define a propTypes object with the expected data types for each prop, and assign it to the component's static propTypes property.</p>
            </div>
            <div className='question-answer'>
                <h3>Question-3: Tell us the difference between nodejs and express js.?</h3>
                <p>Answer:
                    <li>Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js that simplifies the creation of web applications.</li>
                    <li>Node.js provides a set of built-in modules and APIs for performing tasks such as file system operations, networking, and event handling, while Express.js provides additional abstractions and features for handling HTTP requests and responses, routing, middleware, and more.</li>
                    <li>While Node.js can be used to create web servers and handle HTTP requests directly, using Express.js can simplify the process by providing a higher-level API and a more organized structure for building web applications.</li>
                    <li>Express.js also provides a wide range of middleware modules that can be used to add additional functionality to a web application, such as handling authentication, parsing request bodies, and caching responses, among others.</li>


                </p>
            </div>
            <div className='question-answer'>
                <h3>Question-4: What is a custom hook, and why will you create a custom hook?</h3>
                <p>Answer:
                    A custom hook is a JavaScript function that uses built-in hooks and/or other custom hooks to provide a specific functionality that can be reused across multiple components in a React application.

                    Creating a custom hook can help avoid code duplication and improve code organization by abstracting away complex logic into a single reusable hook.

                    Custom hooks can also improve code readability and reduce complexity by separating concerns and making it easier to reason about the behavior of individual components.</p>
            </div>
        </div>
    );
};

export default Blog;