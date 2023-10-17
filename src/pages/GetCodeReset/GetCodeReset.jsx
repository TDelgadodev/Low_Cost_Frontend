import { useState } from "react";
import GetCodeStep from "../../components/GetCodeStep";
import ResetPasswordStep from "../../components/ResetPasswordStep";
import { getCodeToResetPasswordService, resetPasswordService } from "../../services/auth.service";
import { toast } from "react-toastify";


export const GetCodeResetMain = () => {
  const [step, setStep] = useState("getCode"); 
  const [resetData, setResetData] = useState(null);


  const handleSubmitGetCode = async (values) => {
    try {
      const { email } = values; 
      const response = await getCodeToResetPasswordService(email);
      toast.success('Codigo enviado con exito!');
      setResetData({ email }); 
      setStep("resetPassword");
      return response
    } catch (error) {
      console.error("Error obteniendo el código:", error.message);
    }
  };
  const handleSubmitResetPassword = async (values) => {
    try {
      const { codeReset, newPassword } = values;
      const email = resetData?.email;
      const response = await resetPasswordService(email,codeReset.toString(), newPassword);
      toast.success('Contraseña restablecida con éxito!');
    } catch (error) {
      console.error("Error restableciendo la contraseña:", error);
    }
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