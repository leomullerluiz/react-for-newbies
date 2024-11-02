import React from "react";

const UseMemoHook = () => {
    //UseMemo hook is used to memoize a value. It only recalculates the memoized value when one of the dependencies has changed.
    const [count, setCount] = React.useState(0);

    function slowOperation() {
        let c;
        for (let i = 0; i < 10000000; i++) {
            c = i + i / 10;
        }
        return c;
    }

    const t1 = performance.now();
    const value = React.useMemo(() => slowOperation(), []);
    //Here we are using the useMemo hook to memoize the value of slowOperation function
    console.log(value);
    console.log(performance.now() - t1);

    return (
        <>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>{count}</button>
        </>
    );
};

export default UseMemoHook;