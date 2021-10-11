import React from "react";
import { Route, Redirect } from "react-router-dom";

interface ProtectedRoute {
  isAuth: any;
  children: any;
}

const ProtectedRoute: React.FC<ProtectedRoute> = ({
  isAuth,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <> {children}</>;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
