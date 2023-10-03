import PropTypes from 'prop-types';
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoutes = ({
  canActive,
  redirectPath = '/'
}) => {
  const { user } = useAuth(); // Obtén el estado de autenticación desde tu hook de autenticación

  if (!canActive || (canActive && !user)) { // Evita que los usuarios autenticados accedan a la página de inicio de sesión
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

ProtectedRoutes.propTypes = {
  canActive: PropTypes.object,
  redirectPath: PropTypes.string,
}

export default ProtectedRoutes;