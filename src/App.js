import React from "react";
import { Search } from "./components/Search";
import { ContinentsGrid } from "./components/ContinentsGrid";
import { ContinentsMenu } from "./components/ContinentsMenu";
import { DetailCountry } from "./components/DetailCountry";
import "./App.style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Search />
      <div className="App">
        <ContinentsMenu />
        <div>
              <Switch>
                  <Route path="/detail/:id" component={DetailCountry} />
                  <Route path="/continent/:id" component={ContinentsGrid} />
              </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
