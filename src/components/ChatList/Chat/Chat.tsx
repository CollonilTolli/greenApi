// Modules
import React from "react";
// Styles
import cn from "classnames";
import css from "./Chat.module.scss";
//Components

//Interface

const Chat = (chat: {name: string}) => {
  return (
  <div className={css.chat}>
    <p>{chat.name}</p>
  </div>
  );
};

export default Chat;
