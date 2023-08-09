import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  return user ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
