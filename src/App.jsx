import './App.css'
import Basic from './Basic/Basic.jsx'
import Array from './Basic/Array.jsx'
import Events from './Basic/Events.jsx'

const App = () => {

    return (
        <div className="container mx-auto px-8 py-8 sm:px-6 lg:px-8">
            {/*Component are aways wrapped in a div and written with the first letter in uppercase */}
            <Array />
            <Basic />
            <Events />
        </div>
    )
}

export default App