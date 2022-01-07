import axios from "axios";
import { Store } from "redux";
import * as moment from "moment";
import { State } from "../redux/reducers";
import AuthAction from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { AuthType } from "../redux/actions/generalActionTypes";

export const setupAxiosTokenInterceptor = (store: Store<State>) => {
  axios.interceptors.request.use((config) => {
    const storedUserStr = localStorage.getItem("user");
    if (!storedUserStr) {
      return config;
    }
    const userLogged = JSON.parse(storedUserStr);
    config.headers = {
      authorization: `bearer ${userLogged.token}`,
    };

    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      if (error.response.status === 401) {
        console.log("Entra");
        if (store.getState().auth.isLoggedIn) {
          window.location.replace("/");
          AuthAction.logout()(store);
        }
      }
      return Promise.reject(error);
    }
  );
};
