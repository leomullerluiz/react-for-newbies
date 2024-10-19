const Array = () => {
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    ]
    return (
        <div className="flex justify-center py-10">
            <ul className="list-none">
                {books.map(({ title, author }) => (
                    <li className="hover:list-disc hover:text-blue-500" key={title}>{title} - by {author}</li>
                ))}
            </ul>
        </div>
    )
    //ES6 allows us to use the shorthand syntax for array methods
    //The map() method creates a new array with the results of calling a provided function on every element in the calling array.
    //The use of brackets [] indicates that we are using an array, the brackets {} indicate that we are using an object
}

export default Array