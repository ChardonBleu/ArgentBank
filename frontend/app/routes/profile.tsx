import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Account } from "../components/Account";
import type { ReactElement } from "react";
import { useAppSelector } from "~/store/hooks";
import { selectUserFullName } from "~/store/selectors";
import { mockedAccounts } from "~/fixtures/mockedAccounts";

export default function Profile(): ReactElement {
  const userName = useAppSelector(selectUserFullName);
  const isLogged = useAppSelector((state) => state.user.value.isLogged);

  function Accounts() {
    return isLogged ? (
      <>
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userName} !
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {mockedAccounts.map((account, index) => (
          <Account
            key={index}
            name={account.name}
            amount={account.amont}
            balance={account.balance}
          />
        ))}
      </>
    ) : (
      <></>
    );
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <Accounts />
      </main>
      <Footer />
    </>
  );
}
