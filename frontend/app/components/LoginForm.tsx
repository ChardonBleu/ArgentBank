import { useEffect, type FormEvent, type ReactElement } from "react";
import { useAppDispatch } from "../store/hooks";
import { userSignIn, userGetProfile } from "~/routes/profileSlice";
import { useNavigate } from "react-router";
import ApiService from "~/api/apiService";

export function LoginForm(): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (username && password) {
      const userNameInput = document.getElementById("username");
      userNameInput?.setAttribute("value", username);

      const passwordInput = document.getElementById("password");
      passwordInput?.setAttribute("value", password);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());
    const username = formEntries.username as string;
    const password = formEntries.password as string;

    if (formEntries.remember && formEntries.remember === "on") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    const data = await ApiService.getUserToken(username, password);
    const token = data.body.token;
    dispatch(userSignIn(token));
    getProfile(token);
  }

  async function getProfile(token: string) {
    const data = await ApiService.getUserProfile(token);
    const action = {
      email: data.body.email,
      firstName: data.body.firstName,
      lastName: data.body.lastName,
    };
    dispatch(userGetProfile(action));
    navigate("/profile");
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" name="username" required={true} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required={true}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" name="remember" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
}
