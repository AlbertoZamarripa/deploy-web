import { AsistActions } from "../actions/asistenciaActions";
import { AsistenciaTypes } from "../actions/asistenciaTypes";
import { AsistState } from "../entities";

const initialState: AsistState = {
  AsistList: [],
  data: [],
  isInProgress: false,
};

export default (state = initialState, action: AsistActions): AsistState => {
  const { type } = action;

  switch (type) {
    case AsistenciaTypes.LIST_ASIST_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };

    case AsistenciaTypes.LIST_ASIST_REQUEST_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        AsistList: action.students,
      };

    case AsistenciaTypes.LIST_ASIST_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };

    case AsistenciaTypes.UPDATE_STUDENT_ASIST_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case AsistenciaTypes.UPDATE_STUDENT_ASIST_REQUEST_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        AsistList: action.students,
      };

    case AsistenciaTypes.UPDATE_STUDENT_ASIST_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };

    case AsistenciaTypes.GET_ALL_LIST_ASIST:
      return {
        ...state,
        isInProgress: true,
      };

    case AsistenciaTypes.GET_ALL_LIST_ASIST_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        data: action.students,
      };

    case AsistenciaTypes.GET_ALL_LIST_ASIST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
};
