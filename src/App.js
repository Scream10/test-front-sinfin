import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicationContextProvider from "./contexts/PublicationContext";
import Home from "./components/Home";
import Publication from "./components/Publication";

export default function App() {
  return (
      <Router>
        <Switch>
          <PublicationContextProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/publication/:id" component={Publication} />
          </PublicationContextProvider>
        </Switch>
      </Router>
  )
}