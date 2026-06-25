import {useFetchWeatherByZipCode} from "services/api/weather";

import WeatherData from "components/WeatherData/WeatherData";

interface WeatherByZipProps {
  zipCode: string;
}
export const WeatherByZip = (props: WeatherByZipProps) => {
  const {zipCode} = props;

  const {
    data: cityWeatherData,
    isLoading,
    isFetching,
  } = useFetchWeatherByZipCode({
    zipCode,
    days: 40,
  });

  return (
    <>
      <WeatherData data={cityWeatherData} />
    </>
  );
};
