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
interface useFetchWeatherByZipCodeProps {
  zipCode: string;
  days: number;
}
export const useFetchWeatherByZipCode = (
  props: useFetchWeatherByZipCodeProps
) => {
  const {zipCode, days = 10} = props;
  
  return useQuery(
    [queryConstants.SEARCH_BY_ZIP_CODE, zipCode],
    () => {
      return axiosCall({url: endpoints.SEARCH_BY_ZIP_CODE(zipCode, days)});
    },
    {
      onError: (error: any) => {
        console.log(error);
      },
    }
  );
};
interface useFetchWeatherByLatLongProps {
  lat: string;
  lon: string;
  days: number;
}
export const useFetchWeatherByLatLong = (props: useFetchWeatherByLatLongProps) => {
  const {lat,lon, days = 10} = props;
  return useQuery(
    [queryConstants.SEARCH_BY_COORDS, lat, lon,days],
    () => {
      return axiosCall({url: endpoints.SEARCH_BY_COORDS(lat, lon, days)});
    },
    {
      onError: (error: any) => {
        console.log(error);
      },
    }
  );
};

// useFetchWeatherByLatLong;