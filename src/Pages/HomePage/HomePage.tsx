// Styles
import cn from "classnames";
import css from "./HomePage.module.scss";
//Components
import Header from "../../components/Header/Header";
import ChatList from "../../components/ChatList/ChatList";
import ChatMain from "../../components/Chat/ChatMain";
import { useEffect, useState } from "react";

interface props {
  openedChat: string;
  setOpenedChat: any;
}

const HomePage = () => {
  const [openedChat, setOpenedChat] = useState("");

  return (
    <>
      <Header />
      <main className={css.main}>
        <ChatList openedChat={openedChat} setOpenedChat={setOpenedChat} />
        <ChatMain openedChat={openedChat} setOpenedChat={setOpenedChat} />
      </main>
    </>
  );
};

export default HomePage;
