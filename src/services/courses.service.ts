import axios, { AxiosResponse } from "axios";
import { API_URL } from "../common/constants";
import {
  ICourse,
  INewCourse,
  IUpdateCourse,
} from "../components/components/courses/entities";
import {
  IRegister,
  IUpdateHomework,
} from "../components/components/homeworks/entities";

class CourseService {
  async getListCourses(): Promise<ICourse[]> {
    return await axios
      .get(`${API_URL}/teacher/get-courses`)
      .then((response: AxiosResponse<ICourse[]>) => {
        return response.data;
      });
  }

  async deleteCourse(id: string) {
    return await axios
      .post(`${API_URL}/teacher/delete-course`, { id: id })
      .then((response) => {
        return response.data;
      });
  }

  async registerCourse(course: INewCourse) {
    return await axios
      .post(`${API_URL}/curse/register-course`, course)
      .then((response) => {
        return response.data.course;
      });
  }

  async updateCourse(course: IUpdateCourse) {
    return await axios
      .post(`${API_URL}/teacher/update-course`, course)
      .then((response) => {
        return response.data;
      });
  }

  async registerWork(newWork: IRegister) {
    return await axios
      .post(`${API_URL}/teacher/register-work`, newWork)
      .then((response) => {
        return response.data;
      });
  }

  async getListHomeworks(id: string) {
    return await axios
      .get(`${API_URL}/teacher/getList-work/${id}`)
      .then((response) => {
        return response.data;
      });
  }

  async updateHomework(homework: IUpdateHomework) {
    return await axios
      .post(`${API_URL}/teacher/update-work`, homework)
      .then((response) => {
        return response.data;
      });
  }

  async deleteHomework(id: string) {
    return await axios
      .post(`${API_URL}/teacher/delete-work`, { id: id })
      .then((response) => {
        return response.data;
      });
  }
}

export default new CourseService();
