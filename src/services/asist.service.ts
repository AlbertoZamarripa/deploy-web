import axios from "axios";
import { API_URL } from "../common/constants";

class AsistService {
  async getList(id: string, fecha: String) {
    return await axios
      .get(`${API_URL}/curse/get-list-fecha/${fecha}/${id}`)
      .then((response) => {
        return response.data;
      });
  }

  async updateAsist(idCourse: string, fecha: string, idStudent: string) {
    console.log(idCourse, idStudent);
    return await axios
      .post(`${API_URL}/teacher/update-asist-student`, {
        idCourse: idCourse,
        fecha: fecha,
        idStudent: idStudent,
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new AsistService();
