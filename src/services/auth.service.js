import axios from "axios";
const apiUrlAuth = import.meta.env.VITE_USERS_AUTH_API_URL;

export const registerAuthService = async (info) => {
  try {
    const url = `${apiUrlAuth}register`;
    const { data } = await axios.post(
      url,
      {
        ...info,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginAuthService = async (info) => {
  try {
    const url = `${apiUrlAuth}login`;
    const { data } = await axios.post(
      url,
      { ...info },
      { headers: { "Content-Type": "application/json" } }
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message)
  }
};

export const profileUserService = async (userId, token) => {
  try {
    const url = `${apiUrlAuth}profile/${userId}`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `${token}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message)
  }
};

export const updateProfileService = async (updatedData, token) => {
  try {
    const url = `${apiUrlAuth}${updatedData.id}`;
    const response = await axios.put(url, updatedData, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error en la función updateProfileService:", error);
    throw error;
  }
};


export const getCodeToResetPasswordService = async (email) => {
  try {
    const url = `${apiUrlAuth}auth/reset-password/${email}`;
    const { data } = await axios.post(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

const resetPasswordService = async (email, code, newPassword) => {
  try {
    /* const apiUrlAuth = "http://localhost:3000/api/users/"; */
    const apiUrlAuth = "http://lowcostarg.com.ar/api/users/";
    const response = await axios.post(
      `${apiUrlAuth}reset-password/${encodeURIComponent(email)}`,
      {
        code,
        newPassword,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response);
  }
};

export { resetPasswordService };
