import { IStudents, StudentsState } from "../../entities";
import { StudentsActions } from "../actions/studentActions";
import { StudentTypes } from "../actions/studentActionTypes";

const initialState: StudentsState = {
  studentList: [],
  editing: {
    student: {
      id: "",
      nombre: "",
      apellido: "",
      segApe: "",
      status: "",
    },
    isInProgress: false,
  },
  isInProgress: false,
  selectedCourse: {
    course: {
      id: "",
      name: "",
    },
  },
};

export default (
  state = initialState,
  action: StudentsActions
): StudentsState => {
  const { type } = action;

  switch (type) {
    case StudentTypes.GET_STUDENTS_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };

    case StudentTypes.GET_STUDENTS_REQUEST_SUCCESS:
      return {
        ...state,
        studentList: action.students,
        isInProgress: false,
      };
    case StudentTypes.GET_STUDENTS_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        isInProgress: false,
      };
    case StudentTypes.EDIT_STUDENT:
      return {
        ...state,
        editing: {
          student: action.student,
          isInProgress: true,
        },
      };

    case StudentTypes.UPDATE_STUDETS_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case StudentTypes.UPDATE_STUDETS_REQUEST_SUCCESS:
      const prod: IStudents = state.studentList.find(
        (u) => u.id === state.editing?.student.id
      ) as any;
      const prodIdx = state.studentList.indexOf(prod);
      state.studentList.splice(prodIdx, 1, action.student);
      return {
        ...state,
        studentList: [...state.studentList],
        isInProgress: false,
      };
    case StudentTypes.UPDATE_STUDETS_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        isInProgress: false,
      };
    case StudentTypes.SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: { course: action.course },
      };

    case StudentTypes.DELETE_STUDENT_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };

    case StudentTypes.DELETE_STUDENT_REQUEST_SUCCESS:
      console.log(action.id);
      state.studentList = state.studentList.filter((u) => u.id !== action.id);
      return {
        ...state,
        studentList: [...state.studentList],
        isInProgress: false,
      };
    case StudentTypes.DELETE_STUDENT_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        isInProgress: false,
      };
    default:
      return state;
  }
};
