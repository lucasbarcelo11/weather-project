import React from 'react'
import { useState } from 'react'


const Degrees = ({temperature}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const celsiusornot = () => {setIsCelsius(!isCelsius)}
    return (
    <footer>
        <h2 className='text-3xl '>{isCelsius ? `${temperature?.celsius} °C`: `${temperature?.farenheit} °F`}</h2>
        
    <button className='card__button ' onClick={celsiusornot}> Change to {isCelsius?`°Farenheit`:`°Celsius`} </button>
    </footer>
  )
}

export default Degrees