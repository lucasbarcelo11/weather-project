import React from 'react'

const Card = ({weather}) => {

    return (
    
    <article className='card '>
        <header className='card__header'>
        <h1 className='card__title text-3xl	'> Weather App</h1>
        <h2 className='card__location text-2xl'> {weather?.name}, {weather?.sys.country}</h2>
        </header>
        <div className='card__flex'>
        <section className='card__icon-container'>
            <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
        </section>
        <section className='card__info'>
            <h2 className='capitalize'> "{weather?.weather[0].description}" </h2>
            <ul className='card__list'>
                <li className='card__item'> <i className='bx__icon bx bx-wind'></i> <span className='card__span '> Wind Speed</span> {weather?.wind.speed} meter/sec </li>  <br />
                <li className='card__item'> <i className='bx__icon bx bxs-cloud'></i> <span className='card__span'> Clouds</span> {weather?.clouds.all} % </li>  <br />
                <li className='card__item'> <i className='bx__icon bx bxs-thermometer'></i> <span className='card__span'> Pressure</span> {weather?.main.pressure} hPa </li>
            </ul>
        </section>
        
        </div>
        
    </article>
    )
}

export default Card