import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Currency Converter</h5>
            <p className="card-text">Convert between different currencies</p>
            <Link to="/converter" className="btn btn-primary">
              Go to Converter
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Currency Table</h5>
            <p className="card-text">
              See conversion rates for different currencies
            </p>
            <Link to="/table" className="btn btn-primary">
              Go to Table
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
