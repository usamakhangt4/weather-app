import * as R from "ramda";
import {format} from "date-fns";
import {Typography} from "antd";
import Image from "next/image";

const {Title, Text} = Typography;

export default function WeatherCard({weatherData}: any) {
  const currentWeather = R.pathOr([], ["weather"], weatherData);
  const weatherIcon = R.pathOr("", ["icon"], currentWeather[0]);
  const weatherTempratureMinimum = R.pathOr(
    0,
    ["main", "temp_min"],
    weatherData
  );
  const weatherTempratureMaximum = R.pathOr(
    0,
    ["main", "temp_max"],
    weatherData
  );
  const weatherDay = R.pathOr(0, ["dt"], weatherData);
  const dayName = format(new Date(weatherDay * 1000), "EEEE");

  return (
    <article className="weather-card-wrapper">
      <Text className="small-text">{dayName}</Text>
      <Image
        src={`http://openweathermap.org/img/w//${weatherIcon}.png`}
        alt="weatherIcon"
        width={50}
        height={50}
      />
      <Text className="small-text">
        {Math.round(weatherTempratureMinimum)} <sup>o</sup>
        {Math.round(weatherTempratureMaximum)}
        <sup>o</sup>
      </Text>
    </article>
  );
}
