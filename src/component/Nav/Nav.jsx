import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink className="Nav-text" to={"/"}>
            Acceuil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
