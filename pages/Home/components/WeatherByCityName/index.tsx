import {useFetchWeatherByCityName} from "services/api/weather";

import WeatherData from "components/WeatherData/WeatherData";

interface WeatherByCityNameProps {
  cityName: string;
}
export const WeatherByCityName = (props: WeatherByCityNameProps) => {
  const {cityName} = props;

  const {
    data: cityWeatherData,
    isLoading,
    isFetching,
  } = useFetchWeatherByCityName({
    cityName,
    days: 40,
  });

  return (
    <>
      <WeatherData data={cityWeatherData} />
    </>
  );
};
