import React, { useState } from 'react';
import Book from './Book';

export default function Books() {
  const [books, setBooks] = useState([
    {
      name: 'Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      name: 'A Song of Ice & Fire',
      author: 'George RR Martin',
    },
    {
      name: 'One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
    },
  ]);
  return (
    <div>
      <ul>
        {books.map((book) => (<Book key={book.author} books={book} setBooks={setBooks} />))}
      </ul>
    </div>

  );
}
