// Modules
import React, { useEffect, useState } from "react";
// Styles
import cn from "classnames";
import css from "./ChatMain.module.scss";

import { useQuery } from "../../Hooks/useQuery/useQuery";
//Interface
interface prop {
  method: string;
  requestBody?: object;
}
interface message {
  idMessage: string;
  textMessage: string;
  type: string;
}
const ChatMain = (props: { openedChat: string; setOpenedChat: any }) => {
  const emp: prop = {
    method: "GetChatHistory",
    requestBody: {
      chatId: props.openedChat,
      count: 40,
    },
  };
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState(emp);
  const res = useQuery(emp);
  useQuery(message);

  useEffect(() => {
    setTimeout(() => setChat(res.reverse()), 1000);
  }, [props.openedChat, res, message]);

  const sandMessage = (e: any) => {
    e.preventDefault();
    const mess: prop = {
      method: "SendMessage",
      requestBody: {
        chatId: props.openedChat,
        message: e.target.message.value,
      },
    };
    setMessage(mess);
    e.target.message.value = "";
  };

  return (
    <div className={css.chat}>
      <div className={css.mainChat}>
        <div className={css.messages}>
          {chat &&
            chat.map((message: message) => (
              <div
                key={message.idMessage}
                className={cn(
                  message.type === "outgoing"
                    ? css.userMessage
                    : css.companionMessage
                )}
              >
                {message.textMessage}
              </div>
            ))}
        </div>
      </div>
      <form className={css.input} onSubmit={sandMessage}>
        <input name="message" type="text" placeholder="Send Message" />
        <button type="submit">GO!</button>
      </form>
    </div>
  );
};

export default ChatMain;
