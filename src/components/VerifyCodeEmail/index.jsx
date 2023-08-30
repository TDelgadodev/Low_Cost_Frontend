import { useState, useContext } from "react"; 

export default function VerificarCodigo() {
  const { otp, setPage } = useContext(recoveryProvider);
  const [userOTP, setUserOTP] = useState([0, 0, 0, 0]);

  const verifyOTP = () => {
    const enteredOTP = parseInt(userOTP.join(""));
    if (enteredOTP === otp) {
      setPage("reset");
    } else {
      alert("The entered OTP is incorrect. Please try again.");
    }
  };

  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="mb-6">
                  <input
                    onChange={(e) =>
                      setUserOTP(
                        e.target.value.split("").map((digit) => parseInt(digit))
                      )
                    }
                    type="number" 
                    value={userOTP.join("")} 
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter OTP"
                  />
                </div>

                <div className="mb-6">
                  <button
                    type="button"
                    onClick={verifyOTP} 
                    className="w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
