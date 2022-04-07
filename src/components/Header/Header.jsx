import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header({ setUser, user }) {
  function signOut() {
    localStorage.removeItem("token");
    setUser(null);
  }

  if (user) {
  }
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
          {user ? (
            <>
              <p>"Welcome" {user.name}</p>
              <button onClick={signOut}> Log out</button>
            </>
          ) : (
            <>
              <NavLink to={`/login`}>
                <li>Logohu</li>
              </NavLink>
              <NavLink to={`/signup`}>
                <li>Regjistrohu</li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
