import React from "react";
import { Search } from "./components/Search";
import { ContinentsGrid } from "./components/ContinentsGrid";
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
      <div className="App">
        <Search />
            <Switch>
                <Route path="/detail/:id" component={DetailCountry} />
                <Route path="/continents" component={ContinentsGrid} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
