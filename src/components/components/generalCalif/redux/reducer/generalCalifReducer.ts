import { ListCalifState } from "../../entities";
import { CalifActions } from "../actions/generalCalifActions";
import { GeneralCalifTypes } from "../actions/generalCalifTypes";

const initialState: ListCalifState = {
  studentListCalif: {
    students: [],
    promedioGeneral: 0,
    totalTareas: 0,
    nombreCurso: "",
  },
  isInProgress: false,
};

export default (state = initialState, action: CalifActions): ListCalifState => {
  const { type } = action;
  console.log("reducer");
  switch (type) {
    case GeneralCalifTypes.LIST_CALIF_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case GeneralCalifTypes.LIST_CALIF_REQUEST_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        studentListCalif: action.students,
      };
    case GeneralCalifTypes.LIST_CALIF_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
};
