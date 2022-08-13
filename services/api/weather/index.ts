import {endpoints, queryConstants} from "constants/";
import {useQuery} from "react-query";
import {axiosCall} from "services/api";

interface useFetchWeatherByCityNameProps {
  cityName: string;
  days: number;
}
export const useFetchWeatherByCityName = (
  props: useFetchWeatherByCityNameProps
) => {
  const {cityName, days = 10} = props;
  return useQuery(
    [queryConstants.SEARCH_BY_CITY_NAME, cityName],
    () => {
      return axiosCall({url: endpoints.SEARCH_BY_CITY_NAME(cityName, days)});
    },
    {
      onError: (error: any) => {
        console.log(error);
      },
    }
  );
};
