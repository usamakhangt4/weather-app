import axios from "axios";
import {useMutation} from "react-query";

interface axiosCallParametersType {
  url?: any;
  method?: "get" | "post" | "put";
}

export const axiosCall = (props: axiosCallParametersType) => {
  const {url, method = "get"} = props;

  return axios({method, url});
};
