import React, { useState, useEffect } from "react";

const CurrencyTable = ({ currencies }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [baseAmount, setBaseAmount] = useState(1);
  const [rates, setRates] = useState({});

  useEffect(() => {
    if (baseCurrency) {
      fetch(`https://api.frankfurter.app/latest?base=${baseCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          setRates(data.rates);
        });
    }
  }, [baseCurrency]);

  return (
    <div className="container">
      <div class="form-group">
        <label>Base currency:</label>
        <select
          class="form-control"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          <option value="">Select a currency</option>
          {Object.entries(currencies).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div class="form-group">
        <label>Amount:</label>
        <input
          class="form-control"
          type="number"
          value={baseAmount}
          onChange={(e) => setBaseAmount(e.target.value)}
        />
      </div>
      <table class="table table-bordered mt-4">
        <thead class="thead-dark">
          <tr>
            <th>Currency</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rates).map(([code, rate]) => (
            <tr key={code}>
              <td>{currencies[code]}</td>
              <td>{rate}</td>
              <td>{(baseAmount * rate).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
