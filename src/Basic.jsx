//Basic of JSX
//lets create a object called client to be our data source
const client = {
    name: 'Leonardo',
    cart: [
        { product: 'Smartphone', price: '$ 1000' },
        { product: 'Laptop', price: '$ 250' },
        { product: 'Keyboard', price: '$ 333' },
        { product: 'Mouse', price: '$ 300' },
        { product: 'Headphones', price: '$ 1' },
    ],
    active: true,
}

const Basic = () => {

    const data = client
    const total = data.cart.reduce((acc, item) => acc + parseFloat(item.price.replace(/\D/g, '')), 0)
    console.log(data)
    //Output: Object { name: "Leonardo", cart: Array(6), active: true }

    // Tailwind CSS classes are used extensively throughout this component for responsive styling and layout management.
    // Classes like 'container', 'mx-auto', 'px-8', 'py-8', etc., provide utility-based styling without needing custom CSS.
    // The 'sm:' prefix indicates responsive breakpoints, adjusting styles for small screens and above.
    // This approach allows for rapid development and consistent styling across the application.
    return (
        <>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <div className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <span className="font-medium text-gray-900">Name</span>
                        <span className="text-gray-700 sm:col-span-2">{data.name}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <span className="font-medium text-gray-900">Cart</span>
                        <span className="text-gray-700 sm:col-span-2">{data.cart.map((item, index) => <p key={index}>{item.product} - ${parseFloat(item.price.replace(/\D/g, ''))}</p>)}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <span className="font-medium text-gray-900">Cart Total:</span>
                        <span className="text-gray-700 sm:col-span-2">{total}</span>
                    </div>
                </div>
            </div>
        </>
    )
    //In JSX, we use curly braces to define a block of code that will be rendered
    //JSX is a syntax extension for JavaScript that allows us to write HTML-like syntax in JavaScript
}

export default Basic