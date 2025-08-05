import type { FormEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userSignIn } from "~/routes/profileSlice";
import { useNavigate } from "react-router";
import { selectUserFullName } from "~/store/selectors";

export function LoginForm(): ReactElement {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userName = useAppSelector(selectUserFullName)

  function handleSubmit(event:  FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(userSignIn())
    navigate("/profile")
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">{userName}</label>
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
        <input className="sign-in-button"
            type="submit"
            value="Sign In"
        />
      </form>
    </section>
  );
}
