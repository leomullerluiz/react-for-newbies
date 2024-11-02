import React from "react";
//useRef hook is used to persist a reference to an element in the DOM. It returns a mutable ref object whose .current property is set to the value of the element.

const UseRefHook = () => {
    const [comments, setComments] = React.useState([""]);
    const [input, setInput] = React.useState("");

    // 1. We create a ref object using the useRef hook and assign it to the inputElement variable
    const inputElement = React.useRef();

    function handleSubmit() {
        setComments([...comments, input]);
        setInput("");
        // 3. We use the focus method to focus on the input element after adding a new comment
        inputElement.current.focus();
    }

    return (
        <>
            {/* 2. using ref to get the input element */}
            <input ref={inputElement} className="border rounded p-2" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Add Comment</button>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index} >{comment}</li>
                ))}
            </ul>
        </>
    );
};

export default UseRefHook;