import asistService from "../../../../services/asist.service";
import studentsService from "../../../../services/students.service";
import {
  asistRequest,
  asistRequestError,
  asistRequestSuccess,
  listAllAsistRequest,
  listAllAsistRequestFail,
  listAllAsistRequestSuccess,
  updateRequest,
  updateRequestFail,
  updateRequestSuccess,
} from "./asistencia.actions";

export const getListAsist =
  (idCourse: string, fecha: string) => (dispatch: any) => {
    dispatch(asistRequest());
    return asistService.getList(idCourse, fecha).then(
      (students) => {
        dispatch(asistRequestSuccess(students));
      },
      (error) => {
        dispatch(asistRequestError(error));
      }
    );
  };

export const updateAsist =
  (idCourse: string, fecha: string, idStudent: string) => (dispatch: any) => {
    dispatch(updateRequest());
    return asistService.updateAsist(idCourse, fecha, idStudent).then(
      (students) => {
        dispatch(updateRequestSuccess(students));
      },
      (error) => {
        dispatch(updateRequestFail(error));
      }
    );
  };

export const getListAll = (idCourse: string) => (dispatch: any) => {
  dispatch(listAllAsistRequest());
  return studentsService.getAllListAsist(idCourse).then(
    (students) => {
      dispatch(listAllAsistRequestSuccess(students));
    },
    (error) => {
      dispatch(listAllAsistRequestFail(error));
    }
  );
};
export default {
  getListAsist,
  updateAsist,
  getListAll,
};
