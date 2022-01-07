import authService from "../../services/auth.service";
import {
  loginRequest,
  loginRequestError,
  loginRequestLogout,
  loginRequestSuccess,
} from "./auth.actions";

export const login = (email: string, password: string) => (dispatch: any) => {
  const data = { email, password };
  dispatch(loginRequest(data));
  return authService.login(email, password).then(
    (data) => {
      if (data !== "") {
        console.log(data.user.roles);
        if (data.user.roles[0] === "MAESTRO") {
          dispatch(loginRequestSuccess(data));
        } else {
          dispatch(
            loginRequestError({
              name: "User invalid",
              message: "No disponible para alumnos",
            })
          );
        }
      } else {
        dispatch(
          loginRequestError({
            name: "Error",
            message: "Usuario o contraseña incorrecto",
          })
        );
      }
    },
    (error) => {
      const err = {
        name: error.response.data,
        message: error.response.data.message,
      };
      dispatch(loginRequestError(err));
    }
  );
};

export const logout = () => (dispatch: any) => {
  console.log("Si llama");
  authService.logout();
  dispatch(loginRequestLogout());
};

export default {
  login,
  logout,
};
