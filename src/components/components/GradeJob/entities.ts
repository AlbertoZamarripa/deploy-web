import { ApiCallState } from "../../../redux/entities";

export interface IListStudents {
  idStudent: string;
  nombre: string;
  calificacion: number;
}

export interface IUpdateStudent {
  idStudent: string;
  calificacion: number;
}

export interface ListStudentsState extends ApiCallState {
  studentList: IListStudents[];
  editing?: ApiCallState & { student: IUpdateStudent };
}
