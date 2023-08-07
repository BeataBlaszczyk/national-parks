import axios from "axios";
import { getArticlesPath, apiKey } from "./apiEndpoints";


export default async function getArticlesList(number){
  let data;
    try {
        await axios.get(getArticlesPath(number), 
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