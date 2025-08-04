import { Link, useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { signOut } from "~/routes/signinSlice";

function CurrentNavLink() {
    const isLogged = useAppSelector(state => state.signInFlag.value)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

  const loggedNavLinks = () => {
    return (
      <div className="main-nav-links">
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          Name
        </Link>
        <button 
          className="main-nav-item" 
          onClick={() => {
            dispatch(signOut())
            navigate('/') 
          }}
        >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </button>
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

  return isLogged ? loggedNavLinks() : unloggedNavLinks()
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
