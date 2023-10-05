import React, { useEffect, useState } from 'react'
import './home.css'
import { fetchWeather } from '../functions/functions'

export default function Home() {
    const[place,setPlace]=useState('London')
    const [data,setData] = useState({
        temperature:22,
        place:'kollam',
        country:'india',
        time: '12:10 pm',
        imgLink:'https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_640.png',
        feelsLike:15,
        humidity:77,
        wind:55
    })
    const[forecast,setForecast]=useState([])
    const[forecastImg,setForecastImg]= useState('https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_640.png')

    useEffect(()=>{
        const main = async()=>{
          const data = await fetchWeather(place)
        //   console.log(data);
         if(data){
          setData({
            temperature:data.current.temp_c,
            place:data.location.region,
            country:data.location.country,
            time:data.location.localtime,
            imgLink:data.current.condition.icon,
            feelsLike:data.current.feelslike_c,
            humidity:data.current.humidity,
            wind:data.current.wind_kph
          })

          setForecast(data.forecast.forecastday[0].hour)
          setForecastImg(data.forecast.forecastday[0].day.condition.icon)
         }
        }
        main()
      },[])

      //handle search
      const search = async()=>{
        const firstLetter = place.slice(0,1).toUpperCase()
        const rest = place.slice(1).toLowerCase()
        const searchQuery = firstLetter+rest
       const data = await fetchWeather(searchQuery)
       if(data){
        setData({
          temperature:data.current.temp_c,
          place:data.location.region,
          country:data.location.country,
          time:data.location.localtime,
          imgLink:data.current.condition.icon,
          feelsLike:data.current.feelslike_c,
          humidity:data.current.humidity,
          wind:data.current.wind_kph
        })

        setForecast(data.forecast.forecastday[0].hour)
        setForecastImg(data.forecast.forecastday[0].day.condition.icon)
       }else{alert('no data found')}
      }

      // console.log(forecast);
      // console.log(forecast[0].time.slice(-5).slice(0,2));
  return (
    <div className='home-page'>
        <div className="search-bar">
            <input type="text" placeholder='enter location' value={place} onChange={(e)=>setPlace(place=>place = e.target.value)}/>
            <button className='search-btn' onClick={search}>Search</button>
        </div>
        <div className="view-temp">
            <div className="img-and-temp">
                <img src={data.imgLink} alt="temperature" />
                <div className='temperature'>
                    <h2>{data.temperature}<sup>°C</sup></h2>
                </div>

            </div>
            <div className="place-and-country">
                <h4>{data.place}</h4>
                <h4>{data.country}</h4>
            </div>
                <p className='time'>{data.time}</p>
                <div className="feels-and-humidity">
                  <div className="feels-like">
                    <h4>Feels like</h4>
                    <h4>15<sup>°C</sup></h4>
                  </div>
                  <div className="humidity">
                    <h4>Humidity</h4>
                    <h4>{data.humidity} %</h4>
                  </div>
                  <div className="wind">
                    <h4>Wind Speed</h4>
                    <h4>{data.wind} kmph</h4>
                  </div>
                </div>
        </div>
        {/* forecast of today */}
        <div className="forecast">
          <h2 className='sub-heading'>Todays Forecast</h2>
           <div className="forecast-container">
              {forecast.map((item)=>(
                <div className="forecast-box" key={item.time}>
                    <h5>{item.time.slice(-5)} {item.time.slice(-5).slice(0,2)<12?"am":"pm"}</h5>
                    <img src={forecastImg} alt="forecast" />
                    <h4>{item.temp_c}<sup>°C</sup></h4>
                </div>
              ))}
           </div>
        </div>
        
        {/* // about us */}
        <div className="about-us">
          <h2 className="sub-heading">About Us</h2>
          <p>Welcome to Insta Weather, your trusted source for all things weather-related. We are passionate about providing you with accurate, up-to-date, and insightful weather information to help you make informed decisions in your daily life.</p>

          <h3 className="sub-heading">Our Mission</h3>
          <p>At Insta Weather, our mission is simple: to make weather information accessible and understandable to everyone. Weather affects our lives in countless ways, from planning outdoor activities to making travel arrangements, and even preparing for severe weather events. We are here to empower you with the knowledge you need to navigate the ever-changing weather conditions.</p>

          <h3 className="sub-heading">What Sets Us Apart</h3>
          <ul>
            <li><h5>Accuracy:</h5> We pride ourselves on delivering the most precise and reliable weather forecasts. Our team of experienced meteorologists and cutting-edge technology work together to ensure you get the most accurate predictions possible.</li>
            <li><h5>User-Friendly:</h5> We understand that not everyone is a meteorology expert. That's why we present weather information in a clear and easy-to-understand format. Whether you're a weather enthusiast or just checking the daily forecast, you'll find our website user-friendly and informative.</li>
            <li><h5>Comprehensive Coverage:</h5> From local weather updates to global weather trends, we cover it all. Whether you're interested in what's happening in your neighborhood or keeping an eye on weather events worldwide, you'll find the information you need here.</li>
            <li><h5>Educational Resources:</h5> Weather is a fascinating subject, and we believe in sharing our knowledge with you. Explore our blog, educational articles, and weather-related tips to expand your understanding of meteorology.</li>
          </ul>

          <h3 className="sub-heading">Our Commitment</h3>
          <p>At Insta Weather, we are committed to providing a valuable service to our users. We take your feedback seriously and are constantly working to improve our website and services. Our goal is to be your go-to source for weather information, no matter where you are or what your weather-related needs may be.</p>

          <h3 className="sub-heading">Join Us</h3>
          <p>We invite you to explore our website, bookmark it, and follow us on social media to stay connected with the latest weather updates and news. Whether you're planning a weekend getaway, preparing for a storm, or simply curious about the weather, we are here to keep you informed.

Thank you for choosing Insta Weather as your trusted weather companion. We look forward to serving you and helping you stay weather-wise in all of life's adventures.

          </p>
        </div>

    </div>
  )
}
