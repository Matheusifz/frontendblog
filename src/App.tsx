import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/profile";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <button>Login</button>
          <button>Logout</button>
        </Route>
        <ProtectedRoute
          path="/profile"
          component={Profile}
          children
          isAuth={isAuth}
        />
      </Router>
    </div>
  );
}

export default App;
