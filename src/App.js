import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommentContextProvider from "./contexts/CommentContext";
import PublicationList from "./components/PublicationList";
import PublicationDetail from "./components/PublicationDetail";
import Navbar from "./components/Navbar";

export default function App() {
  return (
      <Router>
        <Switch>
          <CommentContextProvider>
            <Navbar />
            <Route exact path="/" component={PublicationList} />
            <Route exact path="/publication/:id" component={PublicationDetail} />
          </CommentContextProvider>
        </Switch>
      </Router>
  )
}