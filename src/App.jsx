import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Account from './components/Account';
import Books from './components/Books';
import Navbar from './components/Navigations';
import Register from './components/Register';
import SingleBook from './components/SingleBook';
import Login from './components/Login';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/account" component={Account} />
          <Route path="/books" component={Books} />
          <Route path="/register" component={Register} />
          <Route path="/book/:id" component={SingleBook} />
          <Route path="/login" component={Login}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
