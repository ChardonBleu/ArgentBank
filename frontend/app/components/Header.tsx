import { Link } from "react-router";

export function Header() {
  return (
    <header className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="./sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </header>
  );
}
