export const WEATHER_API = "http://api.openweathermap.org/data/2.5/forecast?";

const key = "c73aa228bfba692462f96e89080aa39a";

export const SEARCH_BY_CITY_NAME = (cityName: string, days: number) =>
  `${WEATHER_API}q=${cityName}&units=metric&appid=${key}&cnt=${days}`;

export const SEARCH_BY_ZIP_CODE = (zipCode: string, days: number) =>
  `${WEATHER_API}zip=${zipCode}&units=metric&appid=${key}`;

export const SEARCH_BY_COORDS = (
  latitude: string,
  longitude: string,
  days: number
) => `${WEATHER_API}appid=${key}&lat=${latitude}&lon=${longitude}&cnt=${days}`;

