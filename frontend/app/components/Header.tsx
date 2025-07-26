import { Link, useLocation } from "react-router";

function CurrentNavLink() {
  // TODO change location by logged state

  const location = useLocation();

  const loggedNavLinks = () => {
    return (
      <div className="main-nav-links">
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          Name
        </Link>
        <Link className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    );
  };

  const unloggedNavLinks = () => {
    return (
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    );
  };

  return ["/", "/login"].includes(location.pathname)
    ? unloggedNavLinks()
    : loggedNavLinks();
}

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
      <CurrentNavLink />
    </header>
  );
}
