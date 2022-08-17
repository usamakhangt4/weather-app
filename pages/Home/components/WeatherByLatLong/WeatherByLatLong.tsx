import {useFetchWeatherByLatLong} from "services/api/weather";
import * as R from "ramda";
import WeatherData from "components/WeatherData/WeatherData";

interface WeatherByCoordsProps {
  latLong: string;
}
export const WaetherByCoords = (props: WeatherByCoordsProps) => {
  const {latLong} = props;
  const lat = R.split(",", latLong)[0];
  const lon = R.split(",", latLong)[1];
  const {
    data: cityWeatherData,
    isLoading,
    isFetching,
  } = useFetchWeatherByLatLong({
    lat,
    lon,
    days: 40,
  });


  return (
    <>
      <WeatherData data={cityWeatherData} />
    </>
  );
};
