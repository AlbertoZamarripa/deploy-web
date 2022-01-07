import coursesService from "../../../../../services/courses.service";
import { ICourse, INewCourse, IUpdateCourse } from "../../entities";
import {
  courseDeleteFail,
  courseDeleteRequest,
  courseDeleteSuccess,
  courseEditStart,
  courseRegisterRequest,
  courseRegisterRequestFail,
  courseRegisterRequestSuccess,
  courseRequest,
  courseRequestFail,
  courseRequestSuccess,
  courseUpdateRequest,
  courseUpdateRequestFail,
  courseUpdateRequestSuccess,
} from "./curse.actions";

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

export const editCourse = (course: ICourse) => (dispatch: any) => {
  dispatch(courseEditStart(course));
};

/**
 * delete
 */

export const deleteCourse = (id: string) => (dispatch: any) => {
  dispatch(courseDeleteRequest());
  return coursesService.deleteCourse(id).then(
    (course) => {
      dispatch(courseDeleteSuccess(id));
    },
    (error) => {
      dispatch(courseDeleteFail(error));
    }
  );
};

/**
 * REGSITER
 */

export const registerCourse = (course: INewCourse) => (dispatch: any) => {
  dispatch(courseRegisterRequest());
  return coursesService.registerCourse(course).then(
    (course) => {
      dispatch(courseRegisterRequestSuccess(course));
    },
    (error) => {
      dispatch(courseRegisterRequestFail(error));
    }
  );
};

export const updateCourse = (course: IUpdateCourse) => (dispatch: any) => {
  dispatch(courseUpdateRequest());
  return coursesService.updateCourse(course).then(
    (course) => {
      dispatch(courseUpdateRequestSuccess(course));
    },
    (error) => {
      dispatch(courseUpdateRequestFail(error));
    }
  );
};
export default {
  getListCourses,
  editCourse,
  deleteCourse,
  registerCourse,
  updateCourse,
};
