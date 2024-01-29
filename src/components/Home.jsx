import 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to the Book Buddy App!</h1>
      <p className="home-facts">
        Did you know that the longest sentence ever printed is 823 words long? It can be found in Victor Hugo's "Les Misérables."
      </p>
      <p className="home-welcome">
        Ready to explore the world of books? Navigate to the <Link className="home-link" to="/books">Books</Link> or <Link className="home-link" to="/account">Account</Link> section to get started!
      </p>
      <p>Happy reading!</p>
    </div>
  );
};

export default Home;
