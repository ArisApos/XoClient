import { ENTRY_POINT } from "./";
import { axios } from "axios";

const axiosApi = ({ data= null, endpoint, method= 'get', tokken = null }) => {

    const parameters = method === 'get' ? Object.values(data).reduce(( acc, cur)=>acc+encodeURIComponent(cur)+'/' ,'/') : null;
    const encodedUri = `${ENTRY_POINT}/${endpoint}${parameters}`;
    const Authorization = tokken ? `Bearer ${tokken}` : null;
    const headers = { Authorization };

    axios[method](encodedUri, { headers })
      .then((res) => {
        if (res.authSuccess) {
          console.log("GetPlayer-----success-", res.data);
        } else {
          console.log("GetPlayer-----fail-", res.data);
        }
        return res;
      })
      .catch((err) => {
        console.log("GetPlayers----oups! throw error catched", err);
        throw err;
      });

}

export { axiosApi };