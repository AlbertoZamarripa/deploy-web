import axios from "axios";
import { API_URL } from "../common/constants";
class AuthService {
  login(email: string, password: string) {
    const data = { email, password };
    return axios({
      method: "post",
      url: `${API_URL}/user/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    }).then((response) => {
      if (response.data.token) {
        if (response.data.user.roles[0] === "MAESTRO")
          localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
