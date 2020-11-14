import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import './Search.css';

const Search = ({ classes, formClass }, ref) => (
  <form className={formClass}>
    <input
      ref={ref}
      type="text"
      placeholder="Type crypto"
      className={`search-input animate__animated ${classes} ${formClass}`}
    />
  </form>
);

const forwardedSearc = forwardRef(Search);

Search.propTypes = {
  classes: propTypes.string.isRequired,
  formClass: propTypes.string.isRequired,
};

export default forwardedSearc;
