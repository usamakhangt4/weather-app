import * as R from "ramda";
import {useFetchWeatherByCityName} from "services/api/weather";
import {format} from "date-fns";
import {endpoints} from "constants/";

interface WeatherByCityNameProps {
  cityName: string;
}
export const WeatherByCityName = (props: WeatherByCityNameProps) => {
  const {cityName} = props;

  const {data, isLoading, isFetching} = useFetchWeatherByCityName({
    cityName,
    days: 1,
  });

  const name = R.pathOr("", ["data", "city", "name"], data);
  const country = R.pathOr("", ["data", "city", "country"], data);
  const weatherList = R.pathOr([], ["data", "list"], data);
  const weather = R.pathOr([], ["weather"], weatherList[0]);
  const weatherToday = R.pathOr("", ["main"], weather[0]);
  const weatherTodayIcon = R.pathOr("", ["icon"], weather[0]);
  const weatherTodayTemprature = R.pathOr(0, ["main", "temp"], weatherList[0]);

  const currentDay = format(new Date(), "EEEE");
  console.log("weatherToday", weatherToday);

  return (
    <>
      <section>
        <h1>{`${name}, ${country}`}</h1>
        <h2>{currentDay}</h2>
        <h2>{weatherToday}</h2>
      </section>
      <br />
      <hr />
      <br />
      <section>
        <img
          src={`http://openweathermap.org/img/w//${weatherTodayIcon}.png`}
          alt="weatherTodayIcon"
        />
        <h2>{Math.round(weatherTodayTemprature)}</h2>
      </section>
    </>
  );
};
