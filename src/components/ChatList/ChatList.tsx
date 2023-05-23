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
  const GetContacts = {
    method: "GetContacts",
  };
  const resp: any = useQuery(GetContacts);
  const [contacts, setContacts] = useState([]);
  const [chats, setChats] = useState([]);

  

  useEffect(() => {
    setContacts(resp);
  }, [resp]);

  const addChat = (e: any) => {
    e.preventDefault();

    const newChat: chat = {
      id: `${e.target.newChat.value}@c.us`,
      name: `${e.target.newChat.value}`,
      type: "user",
    };
    const arr: any = chats;
    arr.push(newChat);
    props.setOpenedChat(newChat.id);
    setChats(arr)
  };

  return (
    <div className={css.chatList}>
      <form className="input" onSubmit={addChat}>
        <input type="text" name="newChat" placeholder="New Chat" />
        <button type="submit">Go!</button>
      </form>
      <div className={cn(css.chats, css.numbers)}>
        {chats &&
          chats.map((el: chat) => (
            <div key={el.id} onClick={() => props.setOpenedChat(el.id)}>
              <Chat name={el.name} />
            </div>
          ))}
      </div>
      <div className={css.title}>Contacts</div>
      <div className={css.chats}>
        {contacts &&
          contacts.map((contact: chat) => (
            <div
              key={contact.id}
              onClick={() => props.setOpenedChat(contact.id)}
            >
              <Chat name={contact.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatList;
