import React from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        if (product !== null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`).then((response) => response.json()).then((json) => {
                setData(json);
            });
        }
    }, [product]);



    if (data === null) return null;
    return (
        <div className="bg-blue-500 text-white px-4 py-2 rounded">
            <h2>Product: {data.nome}</h2>
            <p>Price: {data.preco}</p>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
