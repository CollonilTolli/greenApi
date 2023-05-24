import React from 'react';
// Styles
import css from './Chat.module.scss';

const Chat = (chat: { name: string }) => {
  return (
    <div className={css.chat}>
      <p>{chat.name}</p>
    </div>
  );
};

export default Chat;
