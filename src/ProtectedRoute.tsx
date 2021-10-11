import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

interface ProtectedRoute {
  isAuth: any;
  children: any;
  path: string;
  component: any;
}

/* const ProtectedRoute: React.FC<ProtectedRoute> = ({
  isAuth,
  children,
  ...rest
}) => {
  console.log('isAuth, props');
  console.log(isAuth, props);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          
        } else {
          console.log(isAuth, props);
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  ); 
};*/

const ProtectedRoute: React.FC<ProtectedRoute> = ({
  isAuth,
  children,
  ...rest
}) => {
  const location = useLocation();

  const returnRoute = () => {
    if (isAuth) {
      return <> {children}</>;
    } else {
      return (
        <Redirect to={{ pathname: "/", state: { from: location.pathname } }} />
      );
    }
  };

  return returnRoute();
};

export default ProtectedRoute;
