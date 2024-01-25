<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h2>Books Available in the Library</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
=======
const Books = () => {

};

export default Books;
>>>>>>> 1255c4017a2a3ff9a8fdb55e76515f55c96d3542
