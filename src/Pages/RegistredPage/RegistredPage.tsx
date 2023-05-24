//Modules
import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
//Styles
import css from './RegistredPage.module.scss';
//Components
import ThemePicker from '../../components/ThemePicker/ThemePicker';

const RegistredPage = () => {
  const onInputChange = (e: any) => {
    e.preventDefault();
    Cookies.set('IdInstance', e.target.IdInstance.value, { expires: 7 });
    Cookies.set('ApiTokenInstance', e.target.ApiTokenInstance.value, {
      expires: 7,
    });
    axios
      .get(
        `https://api.green-api.com/waInstance${Cookies.get('IdInstance')}/GetSettings/${Cookies.get(
          'ApiTokenInstance'
        )}`
      )
      .then(() => {
        window.location.pathname = '/';
      })
      .catch(() => {
        Cookies.remove('IdInstance');
        Cookies.remove('ApiTokenInstance');
      });
  };

  return (
    <main className={css.main}>
      <ThemePicker />
      <form onSubmit={onInputChange}>
        <label>IdInstance</label>
        <input name="IdInstance" type="text" placeholder="IdInstance" />
        <label>ApiTokenInstance</label>
        <input name="ApiTokenInstance" type="text" placeholder="ApiTokenInstance" />
        <button type="submit">Auth</button>
      </form>
    </main>
  );
};

export default RegistredPage;
