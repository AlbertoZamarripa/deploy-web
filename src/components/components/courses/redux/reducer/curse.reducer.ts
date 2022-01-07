import { CourseState } from "../../entities";
import { CourseActions } from "../actions/curseActions";
import { CourseTypes } from "../actions/curseActionTypes";

const initialState: CourseState = {
  courseList: [],
  isInProgress: false,
  editing: {
    course: {
      id: "",
      name: "",
      status: "",
      idCourse: "",
    },
    isInProgress: false,
  },
  creating: {
    course: {
      name: "",
      status: "",
      idCourse: "",
    },
  },
};

export default (state = initialState, action: CourseActions): CourseState => {
  const { type } = action;
  switch (type) {
    case CourseTypes.COURSE_ALL_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case CourseTypes.COURSE_ALL_REQUEST_SUCCESS:
      return {
        ...state,
        courseList: action.courses,
        isInProgress: false,
        error: undefined,
      };
    case CourseTypes.COURSE_ALL_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };

    case CourseTypes.COURSE_EDIT:
      return {
        ...state,
        editing: {
          course: {
            ...action.course,
          },
          isInProgress: false,
        },
      };

    case CourseTypes.COURSE_DELETE_REQUEST: {
      return {
        ...state,
        isInProgress: true,
      };
    }
    case CourseTypes.COURSE_DELETE_REQUEST_SUCCESS:
      let axuList = state.courseList.filter((u) => u.id !== action.id);
      return {
        ...state,
        courseList: axuList,
        isInProgress: false,
        error: undefined,
      };

    case CourseTypes.COURSE_DELETE_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
      };
    case CourseTypes.COURSE_REGISTER_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case CourseTypes.COURSE_REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        courseList: [...state.courseList, action.course],
        error: undefined,
      };
    case CourseTypes.COURSE_REGISTER_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };

    case CourseTypes.COURSE_UPDATE_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case CourseTypes.COURSE_UPDATE_REQUEST_SUCCESS:
      const prod = state.courseList.find(
        (u) => u.id === state.editing?.course.id
      );
      const prodIdx = state.courseList.indexOf(prod as any);
      state.courseList.splice(prodIdx, 1, action.course);
      return {
        ...state,
        isInProgress: false,
        courseList: [...state.courseList],
        error: undefined,
      };
    case CourseTypes.COURSE_UPDATE_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
};
