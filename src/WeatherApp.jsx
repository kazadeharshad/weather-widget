import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Wonderland",
        feelsLike: 22.48,
        humidity: 43,
        temp: 23,
        tempMax: 23,
        tempMin: 23,
        weather: "clear sky",
    });
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo = {updateInfo}></SearchBox>
            <InfoBox info = {weatherInfo}></InfoBox>
        </div>
    )
}