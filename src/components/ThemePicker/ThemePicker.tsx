import React from 'react';
//Styles
import css from './ThemePicker.module.scss';

//Hooks
import { useTheme } from '../../Hooks/useTheme/useTheme';

//Images
import LightSmile from '../../assets/img/LightTheme.svg';
import DarkSmile from '../../assets/img/DarkTheme.svg';

const ThemePicker = () => {
  const { theme, setTheme } = useTheme();
  const themeRemove = () => {
    if (theme === 'dark_theme') setTheme('light_theme');
    else setTheme('dark_theme');
  };

  return (
    <div className={css.theme_picker} onClick={themeRemove}>
      <div className={theme === 'dark_theme' ? css.dark : css.light}>
        <img src={theme === 'dark_theme' ? DarkSmile : LightSmile} alt="" />
      </div>
    </div>
  );
};
export default ThemePicker;
