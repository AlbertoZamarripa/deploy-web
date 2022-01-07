import asistService from "../../../../services/asist.service";
import {
  asistRequest,
  asistRequestError,
  asistRequestSuccess,
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
export default {
  getListAsist,
  updateAsist,
};
