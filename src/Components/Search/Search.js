import React, { useState, forwardRef } from 'react';
import propTypes from 'prop-types';
import { useCryptoSearch } from '../../Config/useCrypto';
import style from './Search.module.css';

const Search = ({ classes, formClass }, ref) => {
  const [query, setQuery] = useState('');

  useCryptoSearch(query);

  const onChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <form className={`${formClass} ${style.formStyle}`}>
      <input
        ref={ref}
        type="text"
        placeholder="Type crypto"
        className={`animate__animated ${style.searchInput} ${style[classes]} ${formClass}`}
        onChange={onChange}
      />
    </form>
  );
};

const forwardedSearc = forwardRef(Search);

Search.propTypes = {
  classes: propTypes.string.isRequired,
  formClass: propTypes.string.isRequired,
};

export default forwardedSearc;
