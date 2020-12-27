import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Components/Pages/Contact";
import News from "./Components/Pages/News";
import Home from "./Components/Pages/Home";
import Tooway from "./Components/Pages/Tooway";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/kontakt" exact component={Contact}></Route>
            <Route path="/novosti" exact component={News}></Route>
            <Route path="/tooway" exact component={Tooway}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
