import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicationContextProvider from "./contexts/PublicationContext";
// import Navbar from './components/Navbar';
// import PublicationList from "./components/PublicationList";
// import NewPublicationForm from "./components/PublicationForm";
import Home from "./components/Home";
import Publication from "./components/Publication";

export default function App() {
  return (
      <Router>
        <Switch>
          <PublicationContextProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/publication/:id" component={Publication} />
              {/* <div className="App">
                <Navbar />
                <PublicationList /> 
                <NewPublicationForm />
              </div> */}
          </PublicationContextProvider>
        </Switch>
      </Router>
  )
}