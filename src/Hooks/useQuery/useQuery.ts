import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const useQuery = (request: { method: string; requestBody?: object }) => {
  const [apiState, setApiState] = useState([]);

  if (!Cookies.get('IdInstance') || !Cookies.get('ApiTokenInstance')) {
    window.location.pathname = '/registred/';
  }
  const idInstance = Cookies.get('IdInstance');
  const apiTokenInstance = Cookies.get('ApiTokenInstance');
  const apiUrl = `https://api.green-api.com/waInstance${idInstance}/${request.method}/${apiTokenInstance}`;

  useLayoutEffect(() => {
    if (request.requestBody) {
      axios
        .post(apiUrl, request.requestBody)
        .then(resp => {
          const chats: any = resp.data;
          setApiState(chats);
        })
        .catch(err => console.warn(err));
    } else {
      axios
        .get(apiUrl)
        .then(resp => {
          const chats: any = resp.data;
          setApiState(chats);
        })
        .catch(err => console.warn(err));
    }
  }, [request, apiUrl]);

  return apiState;
};
