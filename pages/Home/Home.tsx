import {DefaultLayout} from "components/DefaultLayout/DefaultLayout";
import {WeatherByCityName} from "./components/WeatherByCityName";
import {Button} from "antd";
import InputField from "components/InputField/InputField";
import {useState} from "react";
import {useForm} from "react-hook-form";
import SelectField from "components/SelectField/SelectField";
import {weatherSearchValidations} from "validations";
import {yupResolver} from "@hookform/resolvers/yup";
import {WeatherByZip} from "./components/WeatherByZip/WeatherByZip";
import {WaetherByCoords} from "./components/WeatherByLatLong/WeatherByLatLong";

interface weatherAPIProps {
  weatherSearchString: string;
  searchByString: string;
}
export default function Home() {
  const [searchBy, setSearchBy] = useState<string>("cityName");
  const [searchString, setSearchString] = useState<string>("");

  const {control, handleSubmit, reset, formState} = useForm({
    mode: "all",
    defaultValues: {
      weatherSearchString: "islamabad",
      searchByString: searchBy,
    },
    shouldFocusError: true,
    resolver: yupResolver(weatherSearchValidations),
  });

  const onSubmit = (formData: weatherAPIProps) => {
    const {searchByString, weatherSearchString} = formData;
    setSearchBy(searchByString);
    setSearchString(weatherSearchString);
  };

  return (
    <DefaultLayout>
      <form className="form main-container">
        <section className="flex-row">
          <SelectField
            name="searchByString"
            list={[
              {name: "City Name", value: "cityName"},
              {name: "Zip Code", value: "zipCode"},
              {name: "Coordinates", value: "coordinates"},
            ]}
            control={control}
            placeholder={"Search By"}
          />
          <InputField
            name="weatherSearchString"
            control={control}
            classNames="searchField"
          />
          <Button onClick={handleSubmit(onSubmit)}>Search</Button>
        </section>
      </form>
      {searchBy === "cityName" && searchString !== "" && (
        <WeatherByCityName cityName={searchString} />
      )}
      {searchBy === "zipCode" && searchString !== "" && (
        <WeatherByZip zipCode={searchString} />
      )}
      {searchBy === "coordinates" && searchString !== "" && (
        <WaetherByCoords latLong={searchString} />
      )}
    </DefaultLayout>
  );
}
