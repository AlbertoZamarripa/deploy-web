import { ApiCallState } from "../../../redux/entities";

export interface IStudents {
  id: string;
  nombre: string;
  apellido: string;
  segApe: string;
  status: string;
}
export interface ICourseSelected {
  id: string;
  name: string;
}
export interface IUpdateStudent {
  id: string;
  nombre: string;
  apellido: string;
  segApe: string;
}

export interface IDeleteStudent {
  idStudent: string;
  idCourse: string;
}
export interface StudentsState extends ApiCallState {
  studentList: IStudents[];
  editing?: ApiCallState & { student: IStudents };
  creating?: { course: IStudents };
  selectedCourse?: { course: ICourseSelected };
}
