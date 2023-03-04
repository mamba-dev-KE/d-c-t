import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
export const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container flex justify-between items-center">
        <div className="header__logo">
          <p>Movies & Series</p>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};
