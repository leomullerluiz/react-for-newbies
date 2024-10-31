import React from "react";
import Product from "./components/Product";

const UseEffectHook_2 = () => {
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        const storedProduct = window.localStorage.getItem("product");
        console.log(storedProduct);
        if (storedProduct !== null) {
            setProduct(storedProduct);
        }
    }, []);
    React.useEffect(() => {
        if (product !== null) {
            window.localStorage.setItem("product", product);
        }
    }, [product]);

    function handleClick({ target }) {
        setProduct(target.innerText);
    }

    return (
        <>
            <h2>User preference: {product}</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClick}>
                notebook
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClick}>
                smartphone
            </button>
            <br />
            <Product product={product} />
        </>);

};

export default UseEffectHook_2;