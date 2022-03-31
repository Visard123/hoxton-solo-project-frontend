import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* <NavLink to={`/home`}>
            {" "} */}
      <div className="header-logo">
        <img src="../src/images/baboon-logo.png" alt="baboon" />
      </div>
      {/* </NavLink> */}

      <div className="navbar">
        <ul className="nav-list">
          <li>Logohu</li>
          <li>Regjistrohu</li>
        </ul>
      </div>
    </header>
  );
}
