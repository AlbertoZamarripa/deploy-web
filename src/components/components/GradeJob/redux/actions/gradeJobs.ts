import gradeJobsService from "../../../../../services/gradeJobs.service";
import { IUpdateStudent } from "../../entities";
import {
  editStartStudent,
  listStudentRequest,
  listStudentRequestFail,
  listStudentRequestSuccess,
  updateStudentFail,
  updateStudentRequest,
  updateStudentSuccess,
} from "./gradeJob.actions";

export const getListStudents = (idHomework: string) => (dispatch: any) => {
  dispatch(listStudentRequest());
  return gradeJobsService.getListStudents(idHomework).then(
    (students) => {
      dispatch(listStudentRequestSuccess(students));
    },
    (error) => {
      dispatch(listStudentRequestFail(error));
    }
  );
};

export const editStart = (student: IUpdateStudent) => (dispatch: any) => {
  dispatch(editStartStudent(student));
};

export const updateStudent = (student: IUpdateStudent) => (dispatch: any) => {
  dispatch(updateStudentRequest());
  return gradeJobsService.updateStudent(student).then(
    (student) => {
      dispatch(updateStudentSuccess(student));
    },
    (error) => {
      dispatch(updateStudentFail(error));
    }
  );
};
export default {
  getListStudents,
  editStart,
  updateStudent,
};
