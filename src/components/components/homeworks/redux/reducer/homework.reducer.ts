import { HomeworkState } from "../../entities";
import { HomeworkActions } from "../actions/homeworkActions";
import { HomeworkTypes } from "../actions/homeworkActionTypes";
import moment from "moment";
import { formatDate } from "../../../../../common/format.date";
const initialState: HomeworkState = {
  homeworkList: [],
  isInProgress: false,
  editing: {
    homework: {
      id: "",
      name: "",
      descripcion: "",
      createdAt: "",
      status: "",
      dateLimit: "",
      auxDate: "",
    },
    isInProgress: false,
  },
};

export default (
  state = initialState,
  action: HomeworkActions
): HomeworkState => {
  const { type } = action;
  switch (type) {
    case HomeworkTypes.REGISTER_HOMEWORK:
      return {
        ...state,
        isInProgress: true,
      };

    case HomeworkTypes.REGISTER_HOMEWORK_SUCCESS:
      action.homework.auxDate = action.homework.dateLimit;
      action.homework.createdAt = formatDate(action.homework.createdAt);
      action.homework.dateLimit = formatDate(action.homework.dateLimit);
      return {
        ...state,
        isInProgress: false,
        homeworkList: [...state.homeworkList, action.homework],
      };

    case HomeworkTypes.REGISTER_HOMEWORK_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };
    case HomeworkTypes.LIST_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case HomeworkTypes.LIST_REQUEST_SUCCESS:
      action.homeworks.map((e) => {
        e.createdAt = formatDate(e.createdAt);
        e.auxDate = e.dateLimit;
        e.dateLimit = formatDate(e.dateLimit);
      });
      return {
        ...state,
        isInProgress: false,
        homeworkList: action.homeworks,
      };
    case HomeworkTypes.LIST_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };

    case HomeworkTypes.START_EDIT:
      return {
        ...state,
        editing: { homework: action.homework, isInProgress: false },
      };

    case HomeworkTypes.UPDATE_HOMEWORK_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };

    case HomeworkTypes.UPDATE_HOMEWORK_REQUEST_SUCCESS:
      const prod = state.homeworkList.find(
        (u) => u.id === state.editing?.homework.id
      );
      action.homework.createdAt = formatDate(action.homework.createdAt);
      action.homework.auxDate = action.homework.dateLimit;
      action.homework.dateLimit = formatDate(action.homework.dateLimit);
      const prodIdx = state.homeworkList.indexOf(prod as any);
      state.homeworkList.splice(prodIdx, 1, action.homework);
      return {
        ...state,
        homeworkList: [...state.homeworkList],
        isInProgress: false,
      };
    case HomeworkTypes.UPDATE_HOMEWORK_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
      };

    case HomeworkTypes.DELETE_HOMEWORK_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case HomeworkTypes.DELETE_HOMEWORK_REQUEST_SUCCESS:
      state.homeworkList = state.homeworkList.filter((u) => u.id !== action.id);
      return {
        ...state,
        homeworkList: [...state.homeworkList],
        isInProgress: false,
      };
    case HomeworkTypes.DELETE_HOMEWORK_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
};
