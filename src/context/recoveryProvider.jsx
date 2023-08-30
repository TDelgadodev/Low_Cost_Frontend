import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const RecoveryContext = createContext();

export function useRecoveryContext() {
  return useContext(RecoveryContext);
}

export function RecoveryProvider({ children }) {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  const recoveryValues = {
    page,
    setPage,
    otp,
    setOTP,
    email,
    setEmail,
  };

  return (
    <RecoveryContext.Provider value={recoveryValues}>
      {children}
    </RecoveryContext.Provider>
  );
}

RecoveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
