import React, { useState, forwardRef } from 'react';
import propTypes from 'prop-types';
import './Search.css';
import { useCryptoSearch } from '../../Config/useCrypto';

const Search = ({ classes, formClass }, ref) => {
  const [query, setQuery] = useState('');

  useCryptoSearch(query);

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form className={formClass}>
      <input
        ref={ref}
        type="text"
        placeholder="Type crypto"
        className={`search-input animate__animated ${classes} ${formClass}`}
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
