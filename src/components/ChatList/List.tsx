// Styles
import cn from 'classnames';
import css from './ChatList.module.scss';

import React from 'react';
//Components
import Chat from './Chat/Chat';

//Interface && Methods
import { chat } from '../../interfaces';

const List = (props: { openedChat: string; setOpenedChat: any; chats: any[]; className?: any }) => (
  <div className={cn(css.chats, props.className)}>
    {props.chats &&
      props.chats.map((chat: chat) => (
        <div
          key={chat.id}
          onClick={() => props.setOpenedChat(chat.id)}
          className={cn(props.openedChat === chat.id && css.active_chat)}
        >
          <Chat name={chat.name} />
        </div>
      ))}
  </div>
);

export default List;
