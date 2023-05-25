import axios from "axios";
const baseUrlA = "https://64159af08b5d06e4a7b2ae3f.mockapi.io/";
export const makeRequest = (method, data, endpoint, callBack) => {
  axios({
    method: method,
    url: `${baseUrlA}${endpoint}`,
    data: data,
  })
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
