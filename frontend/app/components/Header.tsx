import { Link, useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { userSignOut } from "~/routes/profileSlice";
import { selectUserFullName } from "~/store/selectors";

function CurrentNavLink() {
  const isLogged = useAppSelector((state) => state.user.value.isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userName = useAppSelector(selectUserFullName);

  const loggedNavLinks = () => {
    return (
      <div className="main-nav-links">
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {userName}
        </Link>
        <button
          className="main-nav-item"
          onClick={() => {
            dispatch(userSignOut());
            navigate("/");
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

  return isLogged ? loggedNavLinks() : unloggedNavLinks();
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
