import * as YUP from "yup";
export const weatherSearchValidations = YUP.object().shape({
  weatherSearchString: YUP.string().required("Please enter a city name"),
});
