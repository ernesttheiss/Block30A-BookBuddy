import { useEffect, useState } from 'react';
import './../index.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Raw Response:', data);
        const booksArray = data.books || [];
        if (Array.isArray(booksArray)) {
          setBooks(booksArray);
        } else {
          console.error('Error: Response data does not contain a valid array of books', data);
        }
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="books-container">
      <h2 className="books-header">Books Available in the Library</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div className="book-title">{book.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
