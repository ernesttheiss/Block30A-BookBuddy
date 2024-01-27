import { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import './../index.css'; // Import the new CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
=======

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '',  
    email: '',     
    password: '',  
>>>>>>> 8f83ee3e618b3ec84a9dc813227825172a7a77d0
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
<<<<<<< HEAD

      // Will send the user to the login page after registration.
      navigate('/login');
=======
      
      // Will send the user to the login page after registration.
      navigate('/login');
      
>>>>>>> 8f83ee3e618b3ec84a9dc813227825172a7a77d0
    } catch (error) {
      setError(error.message);
    }
  };

  return (
<<<<<<< HEAD
    <div className="register-container">
=======
    <div>
>>>>>>> 8f83ee3e618b3ec84a9dc813227825172a7a77d0
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
          placeholder="First Name (Optional)"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
          placeholder="Last Name (Optional)"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
