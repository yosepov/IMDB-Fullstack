import axios, { AxiosRequestConfig } from "axios";

export const api = (e: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `http://localhost:3000/api/movie/${e}`,
  }


return axios.request(config).then((response) => {
    return (response.data);
  }).catch((error) => {
    console.error(error);
  });
}