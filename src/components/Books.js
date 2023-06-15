import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const {
    books, isLoading, error, deleteMessage,
  } = useSelector((state) => state.books);
  const [deleteError, setDeleteError] = useState('');

  useEffect(() => {
    setDeleteError(deleteMessage);
  }, [deleteMessage]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } if (error) {
    return (
      <div>
        <h1>
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
      <span>{deleteError}</span>
    </div>
  );
}
