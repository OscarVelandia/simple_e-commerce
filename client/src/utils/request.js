import axios from "axios";

const request = async (url, parameter = "") => {
  try {
    const result = await axios.get(`${url}/${parameter}`);

    return result.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    return console.error("Blablaerror: ", err);
  }
};

export default request;
