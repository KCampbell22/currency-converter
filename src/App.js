import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyTable from "./CurrencyTable";
import "./App.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Home";
import currencies from "./Currencies";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" />
          <Route exact path="/home" element={<Home />}></Route>
          <Route
            exact
            path="/table"
            element={<CurrencyTable currencies={currencies} />}
          ></Route>
          <Route
            exact
            path="/converter"
            element={<CurrencyConverter currencies={currencies} />}
          ></Route>
        </Routes>
        <Home />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
