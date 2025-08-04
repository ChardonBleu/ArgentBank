import type { ReactElement } from "react";
import { useAppDispatch } from "../store/hooks";
import { signIn } from "~/routes/signinSlice";
import { useNavigate } from "react-router";

export function LoginForm(): ReactElement {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button"
          onClick={(event) => {
            event.preventDefault()
            dispatch(signIn())
            navigate("/profile")
          }}
        >Sign In</button>
      </form>
    </section>
  );
}
