// State is a way to store data in a component, it is not a prop, it represents the characteristics of a component at that exact moment;
// We can create multiple state in a component;
// Hooks are special functions of React that allow us to control the state and lifecycle of a functional component;

import { useState } from 'react';
//useState is a hook from React, it is used to create state
//once that the interface is already created, we can use the hooks to reflect new data in the interface

const UseStateHook = () => {

    const [active, setActive] = useState(true);
    //The first argument is the value of the state, the second argument is the function that will be called when the state changes
    //useState(true) represents the initial value of the state
    //Never modify state directly, use the setState method returned from useState
    //By convention, the method used to update the state is called with the 'set' prefix 
    const [data, setData] = useState({ name: 'Leo Müller', age: 27 });

    const handleClick = () => {
        setActive(!active);
    }

    const addValueToObject = () => {
        setData({ ...data, college: 'Uniasselvi' });
    }
    //{ ...data }: This spreads the existing data object. It copies all properties from the current data object.
    //After this operation, the data object will contain all its previous properties plus the new college property.

    return (
        <>
            <button onClick={() => handleClick()} className={`inline-block rounded border px-12 py-3 text-sm font-medium ${active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                {active ? 'Active' : 'Inactive'}
            </button>
            <br />
            <p>
                Name: {data.name} <br />
                Age: {data.age} <br />
                College: {data.college}
            </p>
            <button onClick={() => addValueToObject()} className='inline-block rounded border px-12 py-3 text-sm font-medium bg-blue-500 text-white'>
                Add info to the state object
            </button>
        </>
    )
}

export default UseStateHook