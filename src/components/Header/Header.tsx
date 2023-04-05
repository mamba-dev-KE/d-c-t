import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container flex justify-between items-center">
        <div className="header__logo">
          <p>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Naiflix
            </Link>
          </p>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list flex items-center">
            <li>
              <NavLink to=".">Home</NavLink>
            </li>
            <li>
              <NavLink to="movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="shows">TV Shows</NavLink>
            </li>
            <li>
              <NavLink to="test">Test</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__burger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};
