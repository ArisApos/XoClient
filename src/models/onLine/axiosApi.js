import { ENTRY_POINT } from "./";
import axios from "axios";

const axiosApi = ({ data= null, endpoint, headers, method= 'get', tokken = null }) => {

    const parameters = method === 'get' ? Object.values(data).reduce(( acc, cur)=>acc+encodeURIComponent(cur)+'/' ,'/') : '';
    const encodedUri = `${ENTRY_POINT}/${endpoint}${parameters}`;
    const Authorization = tokken ? `Bearer ${tokken}` : null;
    console.log(
      "Axios API-- data, endpoint, headers, method, tokken",
      data,
      endpoint,
      headers,
      method,
      tokken
    );
    return axios[method](encodedUri, data, { headers: { Authorization, ...headers } })
      .then((res) => {
          console.log('AxiosAPI--------202!!!!')
          return res.data;
      })
      .catch((err) => {
        console.log("AxioApi----oups! throw error catched", err.response);
        throw err;
      });

}

export { axiosApi };