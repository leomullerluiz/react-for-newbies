const Events = () => {
    //Events are actions that happen in the browser, such as a button being clicked or a form being submitted.
    //In React, we use the onClick event to attach a function to a button.
    //The onClick event is a common event that is used to handle user interactions, such as button clicks, form submissions, and more.

    function handleButtonClick() {
        alert('Button clicked!')
    }
    function handleIconClick() {
        alert('Icon clicked!')
    }

    return (
        <div className="flex justify-center py-10">
            <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                <button
                    className="inline-block border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                    onClick={handleButtonClick}
                >
                    {/* 
                        onClick={handleClick} . Let's break it down:

                            1. onClick: This is an attribute commonly used in React to attach an event handler to an HTML element;
                            2. {handleClick}: This is a JavaScript expression that evaluates to the function handleClick. In React, when you put curly braces {} around a variable or function, it tells React to evaluate that expression and insert the resulting value into the DOM;

                        So, in essence, line 15 is saying: "Attach the handleClick function as the click event handler for this button."
                    */}
                    Click me
                </button>

                <button
                    className="inline-block px-4 py-2 text-gray-700 hover:bg-gray-50 focus:relative"
                    onClick={handleIconClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                    </svg>
                </button>
            </span>
        </div>
    )
}

export default Events