import { Header } from "../components/Header";
import { Footer } from "~/components/Footer";
import type { ReactElement } from "react";
import { Link } from "react-router";

export default function SignIn(): ReactElement {
  return (
    <>
      <Header />
      <main>
        login
        <Link to="/profile"> mon profil</Link>
      </main>
      <Footer />
    </>
  );
}
