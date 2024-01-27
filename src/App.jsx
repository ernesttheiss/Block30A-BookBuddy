import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigations';
import Home from './components/Home';
import Books from './components/Books';
import Account from './components/Account';
import Register from './components/Register';


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/account" element={<Account user={user} onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;