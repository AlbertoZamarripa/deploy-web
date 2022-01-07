import axios from "axios";
import { API_URL } from "../common/constants";
import { IUpdateStudent } from "../components/components/GradeJob/entities";

class GradeJobsService {
  async getListStudents(idHomework: string) {
    return await axios
      .get(`${API_URL}/teacher/getList-student-calification/${idHomework}`)
      .then((response) => {
        return response.data;
      });
  }

  async updateStudent(student: IUpdateStudent) {
    return await axios
      .post(`${API_URL}/teacher/update-califications-student`, student)
      .then((response) => {
        return response.data;
      });
  }
}

export default new GradeJobsService();
