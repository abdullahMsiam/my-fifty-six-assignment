import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h4>When should you use context API?</h4>
                <p>
                    When We are using the API context that collect from the internet: <br />
                    Global State Management: For global state manage we use the api context.
                    <br />

                    Avoiding Prop Drilling: This is so important for passing the data from one component to another component. We can drill the data from one to another component.
                    <br />

                    Theme or Localization Management: If we have theme or localization data that needs to be accessible to multiple components, the Context API can be useful.
                    <br />

                    Dynamic Configuration: In some case we have to manage a component dynamically. For this API context is the good choice for us.
                </p>
            </div>
            <div>
                <h4>What is a custom hook?</h4>
                <p>
                    We can create a custom hook in a react project. Its allows to us reuse the perticuler code or logic.And it also useful to manage the complex state management.
                </p>
            </div>
            <div>
                <h4>What is useRef?</h4>
                <p>
                    useRef is a hook that allows to work with mutable values and It also useful for accessing the dom element, preserving values and sorting mutable values.
                </p>
            </div>
            <div>
                <h4>What is useMemo?</h4>
                <p>
                    Here is about useMemo hook: <br />
                    Expensive Computations: useMemo useful for complex calculation, data transformation and filtering operation.
                    <br />
                    Preventing Unnecessary Renders: It the another use of useMemo hook. <br />

                    Memoizing Callback Functions: useMemo hook is allows the memorize the callback function.
                </p>
            </div>
        </div>
    );
};

export default Blog;