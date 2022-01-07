import coursesService from "../../../../../services/courses.service";
import studentsService from "../../../../../services/students.service";
import {
  ICourseSelected,
  IDeleteStudent,
  IStudents,
  IUpdateStudent,
} from "../../entities";
import {
  courseRequest,
  courseRequestFail,
  courseRequestSuccess,
  deleteStudentRequest,
  deleteStudentRequestFail,
  deleteStudentRequestSuccess,
  selectedCourse,
  studentEditStart,
  studentRequestFail,
  studentsRequest,
  studentsRequestSuccess,
  studentUpdateRequest,
  studentUpdateRequestFail,
  studentUpdateRequestSuccess,
} from "./student.actions";

export const getListCourses = () => (dispatch: any) => {
  dispatch(courseRequest());
  return coursesService.getListCourses().then(
    (courses) => {
      dispatch(courseRequestSuccess(courses));
    },
    (error) => {
      dispatch(courseRequestFail(error));
    }
  );
};

export const getListStudents = (id: string) => (dispatch: any) => {
  dispatch(studentsRequest());
  return studentsService.getStudents(id).then(
    (students) => {
      dispatch(studentsRequestSuccess(students));
    },
    (error) => {
      dispatch(studentRequestFail(error));
    }
  );
};

export const updateStudent = (student: IUpdateStudent) => (dispatch: any) => {
  dispatch(studentUpdateRequest());

  return studentsService.updateStudent(student).then(
    (student) => {
      dispatch(studentUpdateRequestSuccess(student));
    },
    (error) => {
      dispatch(studentUpdateRequestFail(error));
    }
  );
};

export const editStart = (student: IStudents) => (dispatch: any) => {
  dispatch(studentEditStart(student));
};
export const _selectedCourse = (course: ICourseSelected) => (dispatch: any) => {
  dispatch(selectedCourse(course));
};

export const deleteStudent = (id: IDeleteStudent) => (dispatch: any) => {
  dispatch(deleteStudentRequest());
  return studentsService.deleteStudent(id).then(
    (student) => {
      dispatch(deleteStudentRequestSuccess(student));
    },
    (error) => {
      dispatch(deleteStudentRequestFail(error));
    }
  );
};
export default {
  getListCourses,
  getListStudents,
  updateStudent,
  editStart,
  _selectedCourse,
  deleteStudent,
};
