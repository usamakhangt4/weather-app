export interface searchWeatherByNameState {
  cityName: any;
}

export type searchWeatherByNameActions = {
  type: "SET_SEARCH_BY_NAME";
  payload: searchWeatherByNameState["cityName"];
};
