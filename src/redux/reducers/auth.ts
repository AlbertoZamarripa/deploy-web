import { AuthActions } from "../actions/authActions";
import { AuthType } from "../actions/generalActionTypes";
import { IStateUser, UserState } from "../entities";

const user: IStateUser = JSON.parse(localStorage.getItem("user") as string);
const initialState: UserState = {
  user: {
    nombre: user ? user.user.nombre : "",
    apellido: user ? user.user.apellido : "",
    segApe: user ? user.user.segApe : "",
    email: user ? user.user.email : "",
  },
  isLoggedIn: user ? true : false,
  isInProgress: false,
};
export default function (state = initialState, action: AuthActions): UserState {
  const { type, user } = action;

  switch (type) {
    case AuthType.LOGIN_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case AuthType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: user,
        isInProgress: false,
      };
    case AuthType.LOGIN_FAIL:
      const er: any = action.error;

      return {
        ...state,
        isInProgress: false,
        error: er.message,
      };

    case AuthType.LOGOUT:
      console.log("Entraaaaa");
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };

    default:
      return state;
  }
}
