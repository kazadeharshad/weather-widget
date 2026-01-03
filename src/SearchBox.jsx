import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import React from 'react';

export default function SearchBox ({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let [errorMsg, setErrorMsg] = useState("");

    let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = "7ef79d739de7a5255668fe4322f68ec8";

    let getWeatherInfo = async () => {
        try{
             let response1 = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse1 = await response1.json();
            //console.log(jsonResponse1);

            //console.log(result);

            let  coords= {
                lat : jsonResponse1[0].lat,
                lon : jsonResponse1[0].lon
            }

            let response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`);
            let jsonResponse2 = await response2.json();
            // console.log(jsonResponse2);
            let result = {
                city:city.toLocaleUpperCase(),
                temp : jsonResponse2.main.temp,
                tempMin : jsonResponse2.main.temp_min,
                tempMax : jsonResponse2.main.temp_max,
                humidity : jsonResponse2.main.humidity,
                feelsLike : jsonResponse2.main.feels_like,
                weather : jsonResponse2.weather[0].description,
            }
            console.log(result);
            return(result);
        }catch(error){
            throw(error)
        }
       
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        if(error === true){
            setErrorMsg(`Such city does not Exist`);
        }
    }

    return(
        <div className='searchBox'>
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>{errorMsg}</p>}
            </form>             
        </div>
    )
}