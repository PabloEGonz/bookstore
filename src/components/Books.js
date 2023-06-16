import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const {
    books, isLoading, error, deleted,
  } = useSelector((state) => state.books);
  const [deleteError, setDeleteError] = useState('');
  const [classes, setClasses] = useState('');

  useEffect(() => {
    if (deleted) {
      setDeleteError('The book was deleted succesfully');
      setClasses('success');
    }
    setTimeout(() => {
      setDeleteError('');
      setClasses('');
    }, 5000);
  }, [deleted]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div>
        <h1 className="message">Loading</h1>
      </div>
    );
  } if (error) {
    return (
      <div>
        <h1 className="message">
          Sorry, something went wrong. Error:
          {error}
        </h1>
      </div>
    );
  }
  return (
    <div>
      <ul className="flex-cl list-ctnr">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <span className={classes}>{deleteError}</span>
    </div>
  );
}
