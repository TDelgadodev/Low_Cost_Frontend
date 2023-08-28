import { useState } from "react";
import GetCodeStep from "../../components/GetCodeStep";
import ResetPasswordStep from "../../components/ResetPasswordStep";

export const GetCodeResetMain = () => {
  const [step, setStep] = useState("getCode"); // O "resetPassword" si es el paso de restablecimiento

  const handleSubmitGetCode = async () => {
    // Lógica para obtener el código
    setStep("resetPassword");
  };

  const handleSubmitResetPassword = async () => {
    // Lógica para restablecer la contraseña
  };

  return (
    <div className="m-3 p-3">
      {step === "getCode" && <GetCodeStep onSubmit={handleSubmitGetCode} />}
      {step === "resetPassword" && (
        <ResetPasswordStep onSubmit={handleSubmitResetPassword} />
      )}
    </div>
  );
};






