import axios from "axios";

class AuthService {
  login(email: string, password: string) {
    const data = { email, password };
    return axios({
      method: "post",
      url: `http://localhost:3001/user/login`,
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
