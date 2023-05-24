// Modules
import React, { useEffect, useState } from 'react';
import { useQuery } from '../../Hooks/useQuery/useQuery';

// Styles
import css from './ChatList.module.scss';

// Interface && Methods
import { chat } from '../../interfaces';
import { GetContacts } from '../../methods';

// Components
import List from './List';
import Input from '../Input/Input';

const ChatList = (props: { openedChat: string; setOpenedChat: any }) => {
  const [chats, setChats] = useState([]);
  const [contacts, setContacts] = useState([]);
  const resp: any = useQuery(GetContacts);
  const emptyArray: any = chats;

  useEffect(() => {
    setContacts(resp);
  }, [resp]);

  const addChat = (e: any) => {
    e.preventDefault();
    const newChat: chat = {
      id: `${e.target.Input.value}@c.us`,
      name: `${e.target.Input.value}`,
      type: 'user',
    };
    emptyArray.push(newChat);
    props.setOpenedChat(newChat.id);
    setChats(emptyArray);
    e.target.Input.value = '';
  };

  return (
    <div className={css.chatList}>
      <Input placeholder={'New Chat'} func={addChat} />
      <List
        openedChat={props.openedChat}
        setOpenedChat={props.setOpenedChat}
        chats={chats}
        className={css.numbers}
      />
      <div className={css.title}>Contacts</div>
      <List openedChat={props.openedChat} setOpenedChat={props.setOpenedChat} chats={contacts} />
    </div>
  );
};

export default ChatList;
