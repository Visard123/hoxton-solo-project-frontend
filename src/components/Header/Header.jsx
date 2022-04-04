import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <NavLink to={`/home`}>
        {" "}
        <div className="header-logo">
          <img src="../src/images/baboon-logo.png" alt="baboon" />
        </div>
      </NavLink>

      <div className="navbar">
        <ul className="nav-list">
          <NavLink to={`/login`}>
            <li>Logohu</li>
          </NavLink>

          <NavLink to={`/signup`}>
            <li>Regjistrohu</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
