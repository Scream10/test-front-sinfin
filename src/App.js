import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicationContextProvider from "./contexts/PublicationContext";
import Home from "./components/Home";
import Publication from "./components/Publication";
import Navbar from "./components/Navbar";

export default function App() {
  return (
      <Router>
        <Switch>
          <PublicationContextProvider>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/publication/:id" component={Publication} />
          </PublicationContextProvider>
        </Switch>
      </Router>
  )
}