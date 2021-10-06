import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <button>Login</button>
          <button>Logout</button>
        </Route>
      </Router>
    </div>
  );
}

export default App;
