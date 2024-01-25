import { useState, useEffect } from 'react';
import Login from './Login';
import PropTypes from 'prop-types';

const Account = ({ onLogin }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [checkedOutBooks, setCheckedOutBooks] = useState([]);

  useEffect(() => {
    // Fetch user data and checked-out books when authenticatedUser changes
    const fetchUserData = async () => {
      if (authenticatedUser) {
        try {
          const response = await fetch('/api/user', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authenticatedUser.token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }

          const userData = await response.json();
          // Update user details
          setAuthenticatedUser({ ...authenticatedUser, ...userData });

          // Fetch checked-out books
          const checkedOutResponse = await fetch(`/api/user/${authenticatedUser.id}/checked-out`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authenticatedUser.token}`,
            },
          });

          if (!checkedOutResponse.ok) {
            throw new Error('Failed to fetch checked-out books');
          }

          const checkedOutData = await checkedOutResponse.json();
          setCheckedOutBooks(checkedOutData);
        } catch (error) {
          console.error(error.message);
        }
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, [authenticatedUser]);

  const handleLogin = (userData) => {
    setAuthenticatedUser(userData);
    // If onLogin prop is provided, call it with the user data
    if (onLogin) {
      onLogin(userData);
    }
  };

  const handleCheckout = async (bookId) => {
    try {
      const response = await fetch('/api/reservations', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authenticatedUser.token}`,
        },
        body: JSON.stringify({ bookId, action: 'checkout' }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`${response.status} - ${errorData.message}`);
      }

      // Update checked-out books after successful checkout
      const checkedOutResponse = await fetch(`/api/user/${authenticatedUser.id}/checked-out`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authenticatedUser.token}`,
        },
      });

      if (!checkedOutResponse.ok) {
        const errorData = await checkedOutResponse.json();
        throw new Error(`${checkedOutResponse.status} - ${errorData.message}`);
      }

      const checkedOutData = await checkedOutResponse.json();
      setCheckedOutBooks(checkedOutData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleReturn = async (reservationId) => {
    try {
      const response = await fetch('/api/reservations', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authenticatedUser.token}`,
        },
        body: JSON.stringify({ reservationId, action: 'return' }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`${response.status} - ${errorData.message}`);
      }

      // Update checked-out books after successful return
      const checkedOutResponse = await fetch(`/api/user/${authenticatedUser.id}/checked-out`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authenticatedUser.token}`,
        },
      });

      if (!checkedOutResponse.ok) {
        const errorData = await checkedOutResponse.json();
        throw new Error(`${checkedOutResponse.status} - ${errorData.message}`);
      }

      const checkedOutData = await checkedOutResponse.json();
      setCheckedOutBooks(checkedOutData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {authenticatedUser ? (
        <div>
          <h2>Welcome, {authenticatedUser.username}!</h2>
          {/* Render other account details here */}
          <div>
            <h3>Checked Out Books</h3>
            {checkedOutBooks.length === 0 ? (
              <p>No books currently checked out.</p>
            ) : (
              <ul>
                {checkedOutBooks.map((book) => (
                  <li key={book.id}>
                    {book.title} - {book.author}
                    <button onClick={() => handleReturn(book.reservationId)}>Return</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={() => handleCheckout(1)}>Checkout Book 1</button>
        </div>
      ) : (
        <div>
          <p>Please log in or create an account to view your account details.</p>
          <Login onLogin={handleLogin} />
          <p>Do not have an account? <a href="/register">Sign up</a></p>
        </div>
      )}
    </div>
  );
};

Account.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Account;
