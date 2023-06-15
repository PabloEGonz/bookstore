import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/booksSlice';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="list">
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteBook(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
