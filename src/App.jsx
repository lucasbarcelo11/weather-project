
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Degrees from './components/Degrees'
import Loading from './components/Loading'
import LoadingTwo from './components/LoadingTwo'
import Card from './components/Card'


function App() {

  const [coords, setcoords] = useState()

  const [weather, setWeather] = useState()

  const [temperature, setTemperature] = useState()

  const success = (pos) => {
    setcoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    
    })
    
  }
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords){
      const apiKey = `4318f9b9c161c5a1439543bf84e28a5b`
    
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)

      .then(res => {
        const celsius =  (res.data.main.temp - 273.15).toFixed(1)
        const farenheit =   (celsius * 9/5 + 3).toFixed(1)
        setTemperature({celsius, farenheit})
      
        setWeather(res.data)}) 
      .catch(error => console.log(error))
    }
  }, [coords]) 

  

  return (
    <main className='main main__loader'>
    <div className="App">
      <section>
      {
        weather ? 
        <Card weather={weather}  /> 
        
        : <Loading />
      }
      {
        weather ? 
        <Degrees temperature={temperature} />
        
        : <LoadingTwo />
      }

      </section>
    </div>
    </main>
  )
}

export default App
