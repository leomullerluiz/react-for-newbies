import { useState } from 'react';
import Pokemon from './Pokemon.jsx'
import Loader from './Loader.jsx'

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
// creating a constant for the base URL of the PokeAPI

const UseStateHook = () => {
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(false);
    //the setLoading function is used to set the loading state to true ou false while the data is being fetched

    async function handleClick() {
        //async function is used to handle the click event
        //async means that the function will return a promise
        setloading(true)
        const res = await fetch(
            `${POKEAPI_BASE_URL}${Math.floor(Math.random() * 151)}`,
        );
        const json = await res.json();
        //await is used to wait for the promise to resolve
        setloading(false)
        setData(json)
    }

    return (
        <>
            <button onClick={() => handleClick()} className='inline-block rounded border px-12 py-3 text-sm font-medium bg-blue-500 text-white'>
                Sort Pokemon
            </button>
            {loading && <Loader />}
            {!loading && data && <Pokemon data={data} />}
        </>
    )
}

export default UseStateHook