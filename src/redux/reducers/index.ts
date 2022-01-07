import { combineReducers } from "redux";
import { CourseState } from "../../components/components/courses/entities";
import { UserState } from "../entities";
import auth from "./auth";
import menu from "./menu";
import course from "../../components/components/courses/redux/reducer/curse.reducer";
import { HomeworkState } from "../../components/components/homeworks/entities";
import homework from "../../components/components/homeworks/redux/reducer/homework.reducer";
import { StudentsState } from "../../components/components/students/entities";
import students from "../../components/components/students/redux/reducer/studentReducer";
import { ListStudentsState } from "../../components/components/GradeJob/entities";
import gradeJobs from "../../components/components/GradeJob/redux/reducer/gradeJobReducer";
import { ListCalifState } from "../../components/components/generalCalif/entities";
import califications from "../../components/components/generalCalif/redux/reducer/generalCalifReducer";
import { AsistState } from "../../components/components/asistencia/entities";
import asistencia from "../../components/components/asistencia/redux/asitencia.reducer";
export interface State {
  auth: UserState;
  menu: any;
  course: CourseState;
  homework: HomeworkState;
  students: StudentsState;
  gradeJobs: ListStudentsState;
  califications: ListCalifState;
  asistencia: AsistState;
}

export default combineReducers<State>({
  auth,
  menu,
  course,
  homework,
  students,
  gradeJobs,
  califications,
  asistencia,
});
