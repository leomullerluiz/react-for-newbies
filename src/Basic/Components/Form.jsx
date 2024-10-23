//A component don't need to be created in a external file, it can be created inline
import Input from "./Input"
import Button from "./Button"

//A component always have to return a single element
//The return can be any type of data accepted by JSX, including a string, number, array, or object
const Form = () => {
    return (
        <form action="">
            <p>
                <label htmlFor="nome">Nome</label>
                <Input />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <Input />
            </p>
            <p>
                <Button />
            </p>
        </form>
    )
}

export default Form
