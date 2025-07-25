import { Hero } from "~/components/Hero";
import { Header } from "../components/Header";
import { HomeInfo } from "~/components/HomeInfo";
import { Footer } from "~/components/Footer";
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <HomeInfo icon="icon-chat.png" title="You are our #1 priority">
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </HomeInfo>

          <HomeInfo
            icon="icon-money.png"
            title="More savings means higher rates"
          >
            The more you save with us, the higher your interest rate will be!
          </HomeInfo>
          <HomeInfo icon="icon-security.png" title="Security you can trust">
            We use top of the line encryption to make sure your data and money
            is always safe.
          </HomeInfo>
        </section>
      </main>
      <Footer />
    </>
  );
}
