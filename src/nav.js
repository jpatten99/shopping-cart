import '../src/Styles/nav.css';
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navpop">
        <div className="navpop2">
          <ul className="nav-links-wrapper">
            <li className="nav-link">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/ShopPage/">ShopPage</NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
}