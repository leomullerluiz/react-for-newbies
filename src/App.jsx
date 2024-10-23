import './App.css'
import Basic from './Basic/Basic.jsx'
import Array from './Basic/Array.jsx'
import Events from './Basic/Events.jsx'
import Form from './Basic/Components/Form.jsx'

const App = () => {

    return (

        <div className="container mx-auto px-8 py-8 sm:px-6 lg:px-8">

            {/*Component are always wrapped in a div and written with the first letter in uppercase */}

            <p>Basic of JSX</p>
            <Basic />
            <br />
            <p>Arrays</p>
            <Array />
            <br />
            <p>Events</p>
            <Events />
            <br />
            <p>Components</p>
            {/* A component don't need to be created in a external file, it can be created inline */}
            <Form />
            <br />

        </div>

    )
}

export default App