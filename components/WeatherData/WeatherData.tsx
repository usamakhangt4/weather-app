import {format} from "date-fns";
import Image from "next/image";
import * as R from "ramda";
import {Typography} from "antd";
import WeatherCard from "components/WeatherCard/WeatherCard";

const {Title, Text} = Typography;

export default function WeatherData({data}: any) {
  const name = R.pathOr("", ["data", "city", "name"], data);
  const country = R.pathOr("", ["data", "city", "country"], data);
  const weatherList = R.pathOr([], ["data", "list"], data);
  const weather = R.pathOr([], ["weather"], weatherList[0]);
  const weatherToday = R.pathOr("", ["main"], weather[0]);
  const weatherTodayIcon = R.pathOr("", ["icon"], weather[0]);
  const weatherTodayTemprature = R.pathOr(0, ["main", "temp"], weatherList[0]);
  const pressue = R.pathOr(0.0, ["main", "pressure"], weatherList[0]);
  const humidity = R.pathOr(0, ["main", "humidity"], weatherList[0]);
  const windSpeed = R.pathOr(0.0, ["wind", "speed"], weatherList[0]);
  const weatherDay = R.pathOr(0, ["weather", "dt"], weatherList[0]);
  const currentDay = format(new Date(weatherDay * 1000), "EEEE");

  const filteredWeatherList: [] = [];

  if (weatherList.length > 0) {
    for (let i = 0; i + 8 <= weatherList.length; i = i + 8) {
      filteredWeatherList.push(weatherList[i]);
    }
  }

  return (
    <section className="weatherDataWrapper">
      <section className="gryed-out">
        <Title level={1}>{`${name}, ${country}`}</Title>
        <Text className="small-text">{currentDay}</Text>
        <Text className="small-text">{weatherToday}</Text>
      </section>

      <section className="main">
        <section className="temp">
          <Image
            src={`http://openweathermap.org/img/w//${weatherTodayIcon}.png`}
            alt="weatherTodayIcon"
            width={100}
            height={100}
          />
          <Text className="large-text">
            {Math.round(weatherTodayTemprature)}
          </Text>
        </section>
        <section className="other gryed-out">
          <article className="flex-row">
            <Text className="small-text">Pressure:</Text>
            <Text className="small-text">{pressue} hPa</Text>
          </article>
          <article className="flex-row">
            <Text className="small-text">Humidity:</Text>
            <Text className="small-text">{humidity}%</Text>
          </article>
          <article className="flex-row">
            <Text className="small-text">Wind Speed:</Text>
            <Text className="small-text">{windSpeed} m/s</Text>
          </article>
        </section>
      </section>
      <section className="weekly-weather">
        {filteredWeatherList.map((data: any, index: number) => (
          <WeatherCard key={index} weatherData={data} />
        ))}
      </section>
    </section>
  );
}
