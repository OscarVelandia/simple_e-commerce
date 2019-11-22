import axios from "axios";
import { redirectTo } from "@reach/router";

const request = async (url, parameter = "") => {
  try {
    const result = await axios.get(`${url}/${parameter}`);

    return result.data;
  } catch (err) {
    return redirectTo("/error");
  }
};

export default request;
