import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ setUser, user }) {
  const navigate = useNavigate();
  function signOut() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/landing-page");
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
              <div className="user-signout">
                <p>
                  Welcome <span>{user.name}</span>
                </p>
                <button onClick={signOut}> Log out</button>
              </div>
            </>
          ) : (
            <>
              <NavLink to={`/landing-page`} children={""}></NavLink>
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
