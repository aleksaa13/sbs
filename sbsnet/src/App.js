import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Components/Pages/Contact";
import News from "./Components/Pages/News";
import Home from "./Components/Pages/Home";
import PravnaLica from "./Components/Pages/PravnaLica";
import OpstiUslovi from "./Components/Pages/OpstiUslovi";
import FizickaLica from "./Components/Pages/FizickaLica";
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
            <Route path="/pravnalica" exact component={PravnaLica}></Route>
            <Route path="/fizickalica" exact component={FizickaLica}></Route>
            <Route path="/opstiuslovi" exact component={OpstiUslovi}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
