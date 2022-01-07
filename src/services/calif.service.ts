import axios from "axios";
import { API_URL } from "../common/constants";
class CalifService {
  async getListCalification(idCourse: string) {
    return await axios
      .get(`${API_URL}/teacher/list-califications-all/${idCourse}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}

export default new CalifService();
