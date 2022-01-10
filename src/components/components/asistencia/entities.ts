import { ApiCallState } from "../../../redux/entities";

export interface IListAsistStudents {
  idStudent: string;
  nombre: string;
  status: boolean;
}

export interface AsistState extends ApiCallState {
  AsistList: IListAsistStudents[];
  data?: any;
  editing?: ApiCallState & { course: IListAsistStudents };
}
