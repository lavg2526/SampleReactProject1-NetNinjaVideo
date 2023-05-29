import "./styles.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Price from "./Price";
import Info from "./Info";
import CustomerInfo from "./CustomerInfo";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Switch>
        <div className="App">
          <Navbar />
          <h3>Mango Santhe</h3>
          <Route exact path="/Info">
            <Info />
          </Route>
          <Route path="/About">
            <Home />
          </Route>
          <Route path="/Price">
            <Price />
          </Route>
          <Route path="/customerInfo">
            <CustomerInfo />
          </Route>
        </div>
      </Switch>
    </Routes>
  );
}
