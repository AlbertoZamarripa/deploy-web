import { IListStudents, ListStudentsState } from "../../entities";
import { GradeJobActions } from "../actions/gradeJobActions";
import { GradeJobTypes } from "../actions/gradeJobActionTypes";

const initialState: ListStudentsState = {
  studentList: [],
  isInProgress: false,
  editing: {
    student: {
      idStudent: "",
      calificacion: 0,
    },
    isInProgress: false,
  },
};

export default (
  state = initialState,
  action: GradeJobActions
): ListStudentsState => {
  const { type } = action;
  switch (type) {
    case GradeJobTypes.LIST_STUDENTS_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case GradeJobTypes.LIST_STUDENTS_REQUEST_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        studentList: action.students,
      };
    case GradeJobTypes.LIST_STUDENTS_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };
    case GradeJobTypes.EDIT_UPDATE_CALIFICATION:
      return {
        ...state,
        editing: { student: action.student, isInProgress: true },
      };
    case GradeJobTypes.UPDATE_CALIFICATION_STUDENT:
      return {
        ...state,
        isInProgress: true,
      };
    case GradeJobTypes.UPDATE_CALIFICATION_STUDENT_SUCCESS:
      const aux: IListStudents[] = [];
      state.studentList.map((u) => {
        if (u.idStudent == action.student.idStudent) {
          u.calificacion = action.student.calificacion;
        }
        aux.push(u);
      });
      return {
        ...state,
        studentList: [...aux],
        isInProgress: false,
      };
    case GradeJobTypes.UPDATE_CALIFICATION_STUDENT_FAIL:
      return {
        ...state,
        error: action.error,
        isInProgress: false,
      };
    default:
      return state;
  }
};
