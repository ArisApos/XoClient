import { ENTRY_POINT } from "./sockets";
import axios from "axios";

const axiosApi = ({ data, endpoint, headers, method= 'get', token }) => {

    const URIparameters = method === 'get' && data ? Object.values(data).reduce(( acc, cur)=>acc+encodeURIComponent(cur)+'/' ,'/') : '';
    const encodedUri = `${ENTRY_POINT}/${endpoint}${URIparameters}`;
    const Authorization = token ? `Bearer ${token}` : null;
    const AxiosParameters = [encodedUri];
    if(data) AxiosParameters.push(data);
    if (Authorization || headers) AxiosParameters.push({ headers: { Authorization, ...headers } });
    console.log(
      "Axios API-- data, endpoint, headers, method, token, AxiosParameters",
      data,
      endpoint,
      headers,
      method,
      token,
      data,
      AxiosParameters
    );
    return axios[method](...AxiosParameters)
      .then((res) => {
          console.log('AxiosAPI--------202!!!!',res);
          return res.data;
      })
      .catch((err) => {
        console.log("AxioApi----oups! throw error catched", err.response);
        throw err;
      });

}

export { axiosApi };