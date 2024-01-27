import { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
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

