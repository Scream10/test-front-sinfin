import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicationList from './components/PublicationList';
import Publication from './components/Publication';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PublicationList />
        </Route>
        <Route exact path="/publication/:id">
          <Publication />
        </Route>
      </Switch>
    </Router>
  );
}