import { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/profile";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <button
            onClick={() => {
              setIsAuth(true);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsAuth(false);
            }}
          >
            Logout
          </button>
          <Link to="/profile"> Go to profile </Link>
        </Route>
        <ProtectedRoute
          path="/profile"
          component={<Profile />}
          isAuth={isAuth}
        />
      </Router>
    </div>
  );
}

export default App;
