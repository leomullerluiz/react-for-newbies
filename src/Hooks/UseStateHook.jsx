// State is a way to store data in a component, it is not a prop, it represents the characteristics of a component at that exact moment;
// We can create multiple state in a component;
// Hooks are special functions of React that allow us to control the state and lifecycle of a functional component;

import { useState } from 'react';
//useState is a hook from React, it is used to create state

const UseStateHook = () => {

    const [active, setActive] = useState(true);

    return (
        <button onClick={() => setActive(!active)} className={`inline-block rounded border px-12 py-3 text-sm font-medium ${active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
            {active ? 'Active' : 'Inactive'}
        </button>
    )
}

export default UseStateHook