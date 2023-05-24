import React from 'react';
// Styles
import css from './Input.module.scss';

const Input = (props: { func: any; placeholder: string }) => (
  <form className={css.input_form} onSubmit={props.func}>
    <input type="text" name="Input" placeholder={props.placeholder} />
    <button type="submit">Go!</button>
  </form>
);

export default Input;
