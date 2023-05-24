// Modules
import React, { useEffect, useState } from 'react';
// Styles
import cn from 'classnames';
import css from './ChatMain.module.scss';
import { useQuery } from '../../Hooks/useQuery/useQuery';
//Interface
import { message } from '../../interfaces';
import { SendMessage } from '../../methods';
import Input from '../Input/Input';

const ChatMain = (props: { openedChat: string; setOpenedChat: any }) => {
  const [chat, setChat] = useState([]);

  const GetChatHistory = {
    method: 'GetChatHistory',
    requestBody: {
      chatId: props.openedChat,
      count: 40,
    },
  };

  const res = useQuery(GetChatHistory);
  const [message, setMessage] = useState(GetChatHistory);
  useQuery(message);

  useEffect(() => {
    setTimeout(() => setChat(res.reverse()), 2000);
  }, [props.openedChat, res, message]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    SendMessage.requestBody = {
      chatId: props.openedChat,
      message: e.target.Input.value,
    };
    const mess: any = SendMessage;
    setMessage(mess);
    e.target.Input.value = '';
  };

  return (
    <div className={css.chat}>
      <div className={css.mainChat}>
        <div className={css.messages}>
          {chat &&
            chat.map((message: message) => (
              <div
                key={message.idMessage}
                className={cn(message.type === 'outgoing' ? css.userMessage : css.companionMessage)}
              >
                {message.textMessage}
              </div>
            ))}
        </div>
      </div>
      <Input placeholder={'Send Message'} func={sendMessage} />
    </div>
  );
};

export default ChatMain;
