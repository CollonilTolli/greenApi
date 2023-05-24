import { useLayoutEffect, useState } from 'react';

const isWindowTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isWindowTheme ? 'dark_theme' : 'light_theme';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);
  useLayoutEffect(() => {
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);
  return { theme, setTheme };
};
