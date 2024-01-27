import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import Books from './components/Books';
import Navbar from './components/Navigations';
import Register from './components/Register';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
