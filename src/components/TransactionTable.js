import React, { useState } from "react";

function TransactionTable({ txns }) {
  const [date, setDates] = useState("2019-11-29");
  const [amount, setAmount] = useState(txns);

  const sort = () => {
    const sorted = [...amount].sort(function (a, b) {
      return a.amount - b.amount;
    });
    setAmount(sorted);
  };
  const handleSumbit = () => {
    const filtered = txns.filter((i) => {
      return i.date === date;
    });
    setAmount(filtered);
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input
          id="date"
          type="date"
          defaultValue="2019-11-29"
          onChange={(e) => setDates(e.target.value)}
        />
        <button className="small" onClick={() => handleSumbit()}>
          Filter
        </button>
      </section>

      <div className="card mt-50">
        <table className="table">
          <thead>
            <tr className="table">
              <th className="table-header">Date</th>
              <th className="table-header">Description</th>
              <th className="table-header">Type</th>
              <th className="table-header">
                <span id="amount" onClick={sort}>
                  Amount ($)
                </span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {amount.map((row) => {
              return (
                <tr>
                  <td>{row.date}</td>
                  <td>{row.description}</td>
                  <td>{row.type === 1 ? "Debit" : "Credit"}</td>
                  <td>{row.amount}</td>
                  <td>{row.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
