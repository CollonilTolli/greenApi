// Styles
import cn from "classnames";
import css from "./HomePage.module.scss";
//Components
import Header from "../../components/Header/Header";
import ChatList from "../../components/ChatList/ChatList";
import ChatMain from "../../components/Chat/ChatMain";

const HomePage = () => {
  return (
    <div className={cn(css.main, "container")}>
      <div className="content">
        <Header />
        <main className={css.main}>
            <ChatList/>
            <ChatMain/>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
