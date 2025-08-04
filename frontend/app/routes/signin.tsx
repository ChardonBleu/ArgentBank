import { Header } from "../components/Header";
import { Footer } from "~/components/Footer";
import { LoginForm } from "~/components/LoginForm";
import type { ReactElement } from "react";

export default function SignIn(): ReactElement {

  
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
