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
                <h3>Question-1: When should you use context API?</h3>
                <p>Answer:
                    <li>Use the Context API in React when you need to share data between components without passing props through multiple intermediate components, known as prop drilling.</li>
                    <li>Use it for global state management, such as managing user authentication state, theme settings, or language preferences.</li>
                    <li>Use it for theming and styling to dynamically change the appearance of components throughout your application.</li>
                    <li>Use it for localization and internationalization to provide translations or localized content.</li>
                    <li>Use it in any scenario where you need to share data across multiple components and passing props down through the component tree becomes cumbersome or inefficient.</li>
                </p>
            </div>
            <div className='question-answer'>
                <h3>Question-2: What is a custom hook?</h3>
                <p>Answer: A custom hook is a special JavaScript function whose name starts with 'using' and can be used to call other hooks. Let's take a look at some of the main differences between custom React JS hooks and React JS components. A custom hook does not require specific signatures.</p>
            </div>
            <div className='question-answer'>
                <h3>Question-3: What is useRef?</h3>
                <p>Answer: A built-in React hook called useRef(initialValue) accepts an argument as an initial value and returns a reference (aka ref). A reference is an item that possesses a certain characteristic.</p>
            </div>
            <div className='question-answer'>
                <h3>Question-4: What is useMemo?</h3>
                <p>Answer: The useMemo Hook can be used to prevent expensive, resource-intensive operations from running pointlessly. In this illustration, a costly function executes on each render. You'll observe a lag in execution when you modify the count or add a to-do.</p>
            </div>
        </div>
    );
};

export default Blog;