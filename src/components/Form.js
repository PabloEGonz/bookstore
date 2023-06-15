import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';

export default function Form() {
  const empty = {
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  };
  const { formMessage } = useSelector((state) => state.books);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [obj, setObj] = useState(empty);

  useEffect(() => {
    setError(formMessage);
    console.log('done');
  }, [formMessage]);

  const handleTitlChng = (e) => {
    e.preventDefault();
    setObj({
      ...obj,
      title: e.target.value,
    });
  };

  const handleAuthChng = (e) => {
    setObj({
      ...obj,
      author: e.target.value,
    });
  };

  const handleCatChng = (e) => {
    setObj({
      ...obj,
      category: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.title.trim() && obj.author.trim() && obj.category.trim()) {
      dispatch(addBooks(obj));
      setObj({
        ...empty,
        category: obj.category,
      });
    } else {
      setError('Please make sure you have fill out all the inputs.');
    }
    setTimeout(() => {
      setError('');
    }, 4000);
  };
  return (
    <div className="add">
      <h2>ADD NEW BOOK</h2>
      <form className="flex" action="post">
        <input id="title" type="text" placeholder="Book Title" value={obj.title} onChange={handleTitlChng} />
        <input id="author" type="text" placeholder="Book Author" value={obj.author} onChange={handleAuthChng} />
        <select id="category" onChange={handleCatChng}>
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
