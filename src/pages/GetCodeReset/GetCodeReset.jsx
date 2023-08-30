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
      console.log(response);
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
      console.log(values);
      const email = resetData?.email;
      const response = await resetPasswordService(email,codeReset.toString(), newPassword);
      console.log(response);
      toast.success('Contraseña restablecida con éxito!');
      // Puedes redirigir a la página de inicio de sesión u otra página relevante aquí
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