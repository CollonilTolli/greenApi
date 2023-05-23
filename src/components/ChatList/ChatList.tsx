// Modules
import React, { useEffect, useState } from "react";
// Styles
import cn from "classnames";
import css from "./ChatList.module.scss";
import { useQuery } from "../../Hooks/useQuery/useQuery";
import Chat from "./Chat/Chat";
//Components

//Interface
interface chat {
  id: string;
  name: string;
  type: string;
}

const ChatList = (props: { openedChat: string; setOpenedChat: any }) => {
  const [chats, setChats] = useState([]);
  const emp = {
    method: "GetContacts",
  };
  const array:any = useQuery(emp);

  useEffect(() => {
    setChats(array.sort());
  }, [array]);
  return (
    <div className={css.chatList}>
      <input type="text" placeholder="New Chat" />
      <div className={css.chats}>
        {chats &&
          chats.map((chat: chat) => (
            <div key={chat.id} onClick={() => props.setOpenedChat(chat.id)}>
              <Chat name={chat.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatList;
