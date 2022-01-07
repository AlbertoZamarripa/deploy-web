import { ApiCallState } from "../../../redux/entities";

export interface IHomeworks {
  id: string;
  name: string;
  createdAt: string;
  descripcion: string;
  status: string;
  dateLimit: string;
  auxDate: string;
}

export interface IRegister {
  idCourse?: string;
  name: string;
  dateLimit: number;
  descripcion: string;
}

export interface IUpdateHomework {
  id: string;
  name: string;
  dateLimit: number;
  descripcion: string;
}

export interface ICalificacion {
  calificacion: number;
}
export interface HomeworkState extends ApiCallState {
  homeworkList: IHomeworks[];
  editing?: ApiCallState & { homework: IHomeworks };
  creating?: { homework: IHomeworks };
}
