import axios from "axios";
import { API_URL } from "../common/constants";
import {
  IDeleteStudent,
  IUpdateStudent,
} from "../components/components/students/entities";

class StudentService {
  async getStudents(id: string) {
    return await axios
      .get(`${API_URL}/teacher/get-list/${id}`)
      .then((response) => {
        return response.data;
      });
  }

  async updateStudent(student: IUpdateStudent) {
    return axios
      .post(`${API_URL}/teacher/update-student`, student)
      .then((response) => {
        return response.data;
      });
  }
  async deleteStudent(id: IDeleteStudent) {
    return axios
      .post(`${API_URL}/teacher/delete-student`, id)
      .then((response) => {
        return response.data;
      });
  }

  async getAllListAsist(idCourse: string) {
    return axios
      .get(`${API_URL}/teacher/get-list-asist-fin/${idCourse}`)
      .then((response) => {
        return response.data;
      });
  }
}
export default new StudentService();
