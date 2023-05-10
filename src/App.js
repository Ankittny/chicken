import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
// import Packages from "./pages/Packages.js";
// import Templates from "./pages/Templates.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/cv/:slug" component={Packages} />
        <Route exact path="/templates/:slug" component={Templates} /> */}
      </Switch>
    </Router>
  );
};
export default App;
