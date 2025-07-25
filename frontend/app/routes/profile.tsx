import { Header } from "../components/Header";
import { Footer } from "~/components/Footer";
import type { ReactElement } from "react";

export default function Profile(): ReactElement {
  return (
    <>
      <Header />
      <main>profile</main>
      <Footer />
    </>
  );
}
