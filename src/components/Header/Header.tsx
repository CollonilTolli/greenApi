// Modules
import React from "react";
// Styles
import cn from "classnames";
import css from "./Header.module.scss";
//Components
import ThemePicker from "../ThemePicker/ThemePicker";

const Header = () => {
  return (
    <header className={css.header}>
        <div className={css.chatlist_header}>
            <img src="" alt="" className={css.avatar_header} />
            <ThemePicker />
        </div>
        <div className={css.singlechat_header}>
            <div className={css.profile}>
            <img src="" alt="" className={css.avatar_header} />
            </div>
        </div>
    </header>
  );
};

export default Header;
