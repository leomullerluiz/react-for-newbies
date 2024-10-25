//All components have a life cycle. The life cycle of a component is the set of events that occur at a particular point in time. He initiates, updates, and finishes. The component appears on the screen, it is updated, and then it disappears.
import { useState, useEffect } from "react";

const UseEffectHook = () => {
    const [count, setCount] = useState(0);


    //useEffect hook is used to perform side effects in function components. It is a way to tell React when a component is about to be re-rendered. React will call the function you pass to useEffect after every render, and also after the initial render. The second argument is an array of dependencies. If any of the dependencies change, the effect will be re-run.
    useEffect(() => {
        console.log("useEffect");
    }, [count]);
    //This hook needs a state and a dependency, the state is what will change and the dependency is what must be changed for the hook to be executed

    return (
        <div>
            <button onClick={() => setCount(count + 1)} className='inline-block rounded border px-12 py-3 text-sm font-medium bg-blue-500 text-white'>{count}</button>
        </div>);
};

export default UseEffectHook;