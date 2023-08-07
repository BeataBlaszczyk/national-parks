import axios from "axios";
import { apiKey, getParksPath } from "./apiEndpoints";

export default async function getParksList(limit,start, term){
  let data;
    try {
        await axios.get(getParksPath(limit,start, term), 
        {
            headers: {
            'X-Api-Key': apiKey,
         },
        })
        .then(response => { 
          data = response.data?.data });
      } catch (error) {
        console.error(error);
      }
      return data;
    
}