import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
