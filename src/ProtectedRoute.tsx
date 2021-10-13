import React from "react";
import { Redirect, useLocation } from "react-router-dom";

interface ProtectedRoute {
  isAuth: any;
  path: string;
  component: any;
}

/* const ProtectedRoute: React.FC<ProtectedRoute> = ({
  isAuth,
  component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}; */

const ProtectedRoute: React.FC<ProtectedRoute> = ({
  isAuth,
  component,
  ...rest
}) => {
  const location = useLocation();

  const returnRoute = () => {
    if (isAuth) {
      return <> {component}</>;
    } else {
      return (
        <Redirect to={{ pathname: "/", state: { from: location.pathname } }} />
      );
    }
  };

  return returnRoute();
};

export default ProtectedRoute;
