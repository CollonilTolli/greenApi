// Modules
import React from "react";
// Styles
import cn from "classnames";
import css from "./ChatMain.module.scss";

import { useQuery } from "../../Hooks/useQuery/useQuery";
//Interface
interface prop {
  method: string;
}
const ChatMain = () => {
  const emp: prop = {
    method: "ReceiveNotification",
  };
  const chats = useQuery(emp);
  return (
    <div className={css.chat}>
      <div className={css.mainChat}>
        <div className={css.messages}>
          <div className={css.userMessage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            quas placeat perspiciatis reprehenderit voluptatem amet. Porro magni
            dolores, eius vitae officiis accusamus. Necessitatibus nemo
            consectetur, inventore repellat libero velit laudantium.
          </div>
          <div className={css.companionMessage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            quas placeat perspiciatis reprehenderit voluptatem amet. Porro magni
            dolores, eius vitae officiis accusamus. Necessitatibus nemo
            consectetur, inventore repellat libero velit laudantium.
          </div>
        </div>
      </div>
      <input type="text" placeholder="New Chat" />
    </div>
  );
};

export default ChatMain;
