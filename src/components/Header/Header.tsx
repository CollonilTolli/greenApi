// Modules
import React from 'react';
import Cookies from 'js-cookie';
// Styles
import css from './Header.module.scss';
//Components
import ThemePicker from '../ThemePicker/ThemePicker';

const Header = () => {
  const logOut = () => {
    Cookies.remove('IdInstance', { path: '/' });
    Cookies.remove('ApiTokenInstance', { path: '/' });
    window.location.reload();
  };
  return (
    <header className={css.header}>
      <div className={css.chatlist_header}>
        <ThemePicker />
      </div>
      <div className={css.singlechat_header}>
        <button
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
