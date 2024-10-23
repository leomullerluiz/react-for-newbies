import './App.css'
import Basic from './Basic/Basic.jsx'
import Array from './Basic/Array.jsx'
import Events from './Basic/Events.jsx'
import Form from './Basic/Components/Form.jsx'
import Properties from './Basic/Properties.jsx'
import Spread from './Basic/Spread.jsx'

const App = () => {

    return (

        <div className="container mx-auto px-8 py-8 sm:px-6 lg:px-8">

            {/*Component are always wrapped in a div and written with the first letter in uppercase */}

            <p>Basic of JSX:</p>
            <Basic />
            <br />
            <p>Arrays:</p>
            <Array />
            <br />
            <p>Events:</p>
            <Events />
            <br />
            <p>Components:</p>
            <Form />
            <br />
            <p>Properties:</p>
            <Properties text="Hello World!" />
            <Properties text="This is a Component rendering a property" text_color="green" />
            <Properties text="We can re-use components and pass data to them" text_color="red" />
            <br />
            <p>Properties with rest and spread:</p>
            <Spread text="We can pass more than one property" text_color="blue" rand_number={Math.floor(Math.random() * 100)} rest_of_props={"rest of props here"} />


        </div>

    )
}

export default App