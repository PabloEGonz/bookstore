import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ name, author }) => (
  <div>
    <h2>{name}</h2>
    <h3>{author}</h3>
    <button type="button">Delete</button>
  </div>
);

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
