import { useState, useEffect } from "react";
import axios from "axios";

export const useQuery = (prop: { method: string }) => {
  const [apiState, setApiState] = useState();

  const idInstance = "1101823352";
  const apiTokenInstance = "00f8c9cf52944a499de6125bfd175857145db38a050745c894";

  useEffect(() => {
    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/${prop.method}/${apiTokenInstance}`;
    axios.get(apiUrl).then((resp) => {
      const chats = resp.data;
      setApiState(chats);
    });
  }, [setApiState, prop.method]);

  return apiState;
};
