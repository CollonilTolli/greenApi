import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";


export const useQuery = (prop: { method: string; requestBody?: object }) => {
  const [apiState, setApiState] = useState([]);

  if (!Cookies.get("IdInstance") || !Cookies.get("ApiTokenInstance")) {
    window.location.pathname = "/registred/";
  }
  const idInstance = Cookies.get("IdInstance");
  const apiTokenInstance = Cookies.get("ApiTokenInstance");
  const apiUrl = `https://api.green-api.com/waInstance${idInstance}/${prop.method}/${apiTokenInstance}`;
  
  useEffect(() => {
    if (apiState) {
      if (prop.requestBody) {
        axios
          .post(apiUrl, prop.requestBody)
          .then((resp) => {
            const chats: any = resp.data;
            setApiState(chats);
          })
          .catch((err) => console.warn(err));
      } else {
        axios
          .get(apiUrl)
          .then((resp) => {
            const chats: any = resp.data;
            setApiState(chats);
          })
          .catch((err) => console.warn(err));
      }
    }
  }, [prop]);

  return apiState;
};
