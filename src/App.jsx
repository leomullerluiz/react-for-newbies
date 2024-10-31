//Here we are importing the components that we will use in the App.jsx
import './App.css'
import Basic from './Basic/Basic.jsx'
import Array from './Basic/Array.jsx'
import Events from './Basic/Events.jsx'
import Form from './Basic/Components/Form.jsx'
import Properties from './Basic/Properties.jsx'
import Spread from './Basic/Spread.jsx'
import UseStateHook from './Hooks/UseStateHook.jsx'
import UseStateHook_2 from './Hooks/UseStateHook_2/UseStateHook_2.jsx'
import UseEffectHook from './Hooks/UseEffectHook/UseEffectHook.jsx'
import UseEffectHook_2 from './Hooks/UseEffectHook/UseEffectHook_2.jsx'

const App = () => {

    return (

        <div className="container mx-auto px-8 py-8 sm:px-6 lg:px-8">

            {/*Component are always wrapped in a div and written with the first letter in uppercase */}

            <b>Basic of JSX:</b>
            <Basic />
            <hr className='my-8' />
            <b>Arrays:</b>
            <Array />
            <hr className='my-8' />
            <b>Events:</b>
            <Events />
            <hr className='my-8' />
            <b>Components:</b>
            <Form />
            <hr className='my-8' />
            <b>Properties:</b>
            <Properties text="Hello World!" />
            <Properties text="This is a Component rendering a property" text_color="green" />
            <Properties text="We can re-use components and pass data to them" text_color="red" />
            <hr className='my-8' />
            <b>Properties with rest and spread:</b>
            <Spread text="We can pass more than one property" text_color="blue" rand_number={Math.floor(Math.random() * 100)} rest_of_props={"rest of props here"} />
            <hr className='my-8' />
            <b>State:</b>
            <UseStateHook />
            <hr className='my-8' />
            <b>State Part. 2:</b> <br />
            <UseStateHook_2 />
            <hr className='my-8' />
            <b>Use Effect</b><br />
            <UseEffectHook />
            <hr className='my-8' />
            <b>Use Effect</b><br />
            <UseEffectHook_2 />
            <hr className='my-8' />
        </div>

    )
}

export default App
//Here we are exporting the App component to be used in the index.jsx