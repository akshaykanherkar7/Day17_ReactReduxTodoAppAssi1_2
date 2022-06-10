import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  const from = {
    pathname: location.pathname,
  };

  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/login"} state={from} replace />;
  }
};
