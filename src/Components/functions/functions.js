import axios from 'axios'
import { api_Key, api_url } from '../../static'

export const fetchWeather = async(place)=>{

    try{
        const res = await axios.get(api_url+`/forecast.json?key=${api_Key}&q=${place}&aqi=no`)
        const data = res.data
        console.log(data);
        return data
    }catch(err){
        console.log('unable to fetch weather now! wrong api key or place!');
        console.error(err);
    }
}
