import PropTypes from 'prop-types';
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = ({
  canActive,
  redirectPath = '/'
}) => {
  if(!canActive){
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet/>
}



ProtectedRoutes.propTypes = {
  canActive: PropTypes.object,
  redirectPath: PropTypes.string
}

export default ProtectedRoutes;