import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [obj, setObj] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'title') {
      setObj({
        ...obj,
        title: e.target.value,
      });
    } else if (e.target.id === 'author') {
      setObj({
        ...obj,
        author: e.target.value,
      });
    } else if (e.target.id === 'category') {
      setObj({
        ...obj,
        category: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.title.trim() && obj.author.trim() && obj.category.trim()) {
      dispatch(addBook(obj));
    } else {
      setError('Please make sure you have fill out all the inputs.');
    }
  };
  return (
    <div>
      <form action="post" onChange={handleChange}>
        <input id="title" type="text" placeholder="Book Title" value={obj.title} />
        <input id="author" type="text" placeholder="Book Author" value={obj.author} />
        <select id="category">
          <option value="">--Category--</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="SciFi">SciFi</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="Other">Other</option>
        </select>
        <button type="button" onClick={handleSubmit}>Add Book</button>
      </form>
      <span className="error">{error}</span>
    </div>
  );
}
