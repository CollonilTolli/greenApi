import { useState, useLayoutEffect, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const useQuery = (prop: { method: string; requestBody?: object }) => {
  const [apiState, setApiState] = useState([]);
  let apiStateOld:any;

  if (!Cookies.get("IdInstance") || !Cookies.get("ApiTokenInstance")) {
    window.location.pathname = "/registred/";
  }
  const idInstance = Cookies.get("IdInstance");
  const apiTokenInstance = Cookies.get("ApiTokenInstance");
  const apiUrl = `https://api.green-api.com/waInstance${idInstance}/${prop.method}/${apiTokenInstance}`;
  
  
  useLayoutEffect(() => {
    if (apiStateOld !== apiState) {
      if (prop.requestBody) {
        axios
          .post(apiUrl, prop.requestBody)
          .then((resp) => {
            const chats: any = resp.data;
            setApiState(chats);
            apiStateOld = chats
          })
          .catch((err) => console.warn(err));
      } else {
        axios
          .get(apiUrl)
          .then((resp) => {
            const chats: any = resp.data;
            setApiState(chats);
            apiStateOld = chats
          })
          .catch((err) => console.warn(err));
      }
    }
    else return
  }, [prop, apiUrl, apiStateOld]);

  return apiState;
};
