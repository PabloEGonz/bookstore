import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const styl = {
    '--p': '80',
    '--b': '5px',
    '--c': '#0290ff',
  };
  return (
    <div className="list">
      <div className="book-item">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <button
            type="button"
          >
            Comment
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteBook(id));
            }}
          >
            Delete
          </button>
          <button
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="stats">
        <div className="pie" style={styl} />
        <span className="perct">
          {' '}
          <h3 className="number">80%</h3>
          {' '}
          Completed
        </span>
      </div>
      <div className="progress flex-cl">
        <p>CURRENT CHAPTER</p>
        <p className="chapter">Chapter 16</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
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
