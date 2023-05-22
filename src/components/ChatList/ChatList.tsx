// Modules
import React from "react";
// Styles
import cn from "classnames";
import css from "./ChatList.module.scss";
import { useQuery } from "../../Hooks/useQuery/useQuery";
//Components

//Interface
interface prop {
  method: string;
}

const ChatList = () => {
  const emp: prop = {
    method: "ReceiveNotification",
  };
  const chats = useQuery(emp);
  console.log(chats);
  return (
    <div className={css.chatList}>
      <input type="text" placeholder="Send Message" />
      <div className={css.chats}></div>
    </div>
  );
};

export default ChatList;
