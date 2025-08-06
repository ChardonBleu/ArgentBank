import type { ReactElement } from "react";

interface AccountType {
  name: string;
  amount: number;
  balance: string;
}

export function Account({ name, amount, balance }: AccountType): ReactElement {
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{name}</h3>
          <p className="account-amount">
            {amount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="account-amount-description">{balance} Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}
