import "./styles.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Price from "./Price";
import Info from "./Info";
import CustomerInfo from "./CustomerInfo";
import Cart from "./Cart";
import { useState } from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";

export default function App() {
  const [blogs, setBlogs] = useState([
    {
      title: "Raspuri Mango",
      origin: "Mysore",
      id: 1,
    },
    {
      title: "Imam Pasand Mango",
      origin: "Tamil Nadu",
      id: 2,
    },
    {
      title: "Alphonso Mango",
      origin: "Portuguese",
      id: 3,
    },
  ]);
  const addItems = (item) => {
    let newblogs = blogs;
    newblogs.push(item);
    console.log("item:", item);
    console.log("blogs:", blogs);
    setBlogs(newblogs);
  };
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
            <Home blogs={blogs} />
          </Route>
          <Route path="/Price">
            <Price />
          </Route>
          <Route path="/customerInfo/:id">
            <CustomerInfo />
          </Route>
          <Route path="/Cart">
            <Cart addItems={addItems} />
          </Route>
        </div>
      </Switch>
    </Routes>
  );
}
