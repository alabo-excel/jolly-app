import { Link } from 'react-router-dom'
import './styles.css'
function Header() {
  return (
    <div className="Nav">
    <nav className="navbar navbar-expand-lg justify-space-around">
      <h1 className="navbar-brand text-white">JOLLY</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item">
            <Link to="/" className="nav-link" >Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">Movies</Link>
          </li>
          <li className="nav-item">
            <Link to="/music" className="nav-link">Music</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Header;
