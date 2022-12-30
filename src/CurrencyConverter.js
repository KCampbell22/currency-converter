import React, { useState, useEffect } from "react";
import "./converter.css";
// import button

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    // Set the list of available currencies from the provided object
    setCurrencies({
      AUD: "Australian Dollar",
      BGN: "Bulgarian Lev",
      BRL: "Brazilian Real",
      CAD: "Canadian Dollar",
      CHF: "Swiss Franc",
      CNY: "Chinese Renminbi Yuan",
      CZK: "Czech Koruna",
      DKK: "Danish Krone",
      EUR: "Euro",
      GBP: "British Pound",
      HKD: "Hong Kong Dollar",
      HRK: "Croatian Kuna",
      HUF: "Hungarian Forint",
      IDR: "Indonesian Rupiah",
      ILS: "Israeli New Sheqel",
      INR: "Indian Rupee",
      ISK: "Icelandic Króna",
      JPY: "Japanese Yen",
      KRW: "South Korean Won",
      MXN: "Mexican Peso",
      MYR: "Malaysian Ringgit",
      NOK: "Norwegian Krone",
      NZD: "New Zealand Dollar",
      PHP: "Philippine Peso",
      PLN: "Polish Złoty",
      RON: "Romanian Leu",
      SEK: "Swedish Krona",
      SGD: "Singapore Dollar",
      THB: "Thai Baht",
      TRY: "Turkish Lira",
      USD: "United States Dollar",
      ZAR: "South African Rand",
    });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(
        `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`
      )
        .then((response) => response.json())
        .then((data) => {
          setConvertedAmount(amount * data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency, amount]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <div className="container-fluid">
      <div className="form-group h-100 d-flex align-items-center jusify-content-center converter">
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          From:
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="form-control"
          >
            <option value="">Select a currency</option>
            {Object.keys(currencies).map((currency) => (
              <option key={currency} value={currency}>
                {currencies[currency]}
              </option>
            ))}
          </select>
        </label>
        <label>
          To:
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="form-control"
          >
            <option value="">Select a currency</option>
            {Object.keys(currencies).map((currency) => (
              <option key={currency} value={currency}>
                {currencies[currency]}
              </option>
            ))}
          </select>
        </label>

        <button className="swap mt-3" onClick={handleSwap}>
          <svg
            width="40"
            height="37"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_401_13" fill="white">
              <path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V29C40 33.4183 36.4183 37 32 37H8C3.58172 37 0 33.4183 0 29V8Z" />
            </mask>
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V29C40 33.4183 36.4183 37 32 37H8C3.58172 37 0 33.4183 0 29V8Z"
              fill="#D9D9D9"
            />
            <path
              d="M29.0599 15.4304C29.595 15.5672 30.1397 15.2444 30.2765 14.7093L32.5065 5.98996C32.6433 5.4549 32.3205 4.91021 31.7855 4.77337C31.2504 4.63652 30.7057 4.95934 30.5689 5.49441L28.5867 13.2449L20.8361 11.2627C20.3011 11.1259 19.7564 11.4487 19.6195 11.9838C19.4827 12.5188 19.8055 13.0635 20.3406 13.2004L29.0599 15.4304ZM10.9401 20.262C10.405 20.1251 9.86033 20.4479 9.72349 20.983L7.4935 29.7023C7.35665 30.2374 7.67947 30.7821 8.21454 30.9189C8.7496 31.0558 9.29429 30.733 9.43113 30.1979L11.4133 22.4474L19.1639 24.4296C19.6989 24.5664 20.2436 24.2436 20.3805 23.7085C20.5173 23.1735 20.1945 22.6288 19.6594 22.4919L10.9401 20.262ZM9.87512 14.9454C13.3656 8.633 16.7086 6.71507 19.5466 7.03418C21.0142 7.19919 22.5241 7.96608 24.0453 9.33004C25.5654 10.6931 27.0481 12.6103 28.4474 14.9714L30.168 13.9517C28.7034 11.4806 27.0998 9.38267 25.3805 7.84099C23.6621 6.30018 21.7794 5.27263 19.7701 5.04671C15.6546 4.58396 11.7077 7.49823 8.12488 13.9776L9.87512 14.9454ZM30.1249 20.7469C26.6344 27.0593 23.2914 28.9772 20.4533 28.6581C18.9858 28.4931 17.4759 27.7262 15.9547 26.3623C14.4346 24.9992 12.9519 23.082 11.5526 20.7209L9.83205 21.7406C11.2966 24.2117 12.9002 26.3096 14.6195 27.8513C16.3379 29.3921 18.2206 30.4197 20.2299 30.6456C24.3454 31.1083 28.2923 28.1941 31.8751 21.7147L30.1249 20.7469ZM2 8C2 4.68629 4.68629 2 8 2V-2C2.47715 -2 -2 2.47715 -2 8H2ZM8 2H32V-2H8V2ZM32 2C35.3137 2 38 4.68629 38 8H42C42 2.47715 37.5228 -2 32 -2V2ZM38 8V29H42V8H38ZM38 29C38 32.3137 35.3137 35 32 35V39C37.5228 39 42 34.5228 42 29H38ZM32 35H8V39H32V35ZM8 35C4.68629 35 2 32.3137 2 29H-2C-2 34.5228 2.47715 39 8 39V35ZM2 29V8H-2V29H2Z"
              fill="black"
              mask="url(#path-1-inside-1_401_13)"
            />
          </svg>
        </button>

        <label>
          Converted amount:
          <input
            type="number"
            value={convertedAmount.toFixed(2)}
            className="form-control"
            readOnly
          />
        </label>
      </div>
    </div>
  );
};

export default CurrencyConverter;
