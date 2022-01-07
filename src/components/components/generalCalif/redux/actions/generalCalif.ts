import califService from "../../../../../services/calif.service";
import {
  listCalifRequest,
  listCalifRequestFail,
  listCalifRequestSuccess,
} from "./generalCalif.actions";

export const listCalifications = (idCourse: string) => (dispatch: any) => {
  dispatch(listCalifRequest());
  return califService.getListCalification(idCourse).then(
    (students) => {
      dispatch(listCalifRequestSuccess(students));
    },
    (error) => {
      dispatch(listCalifRequestFail(error));
    }
  );
};

export default {
  listCalifications,
};
