import { ApiCallState } from "../../../redux/entities";

export interface IListCalifications {
  students: IStudents[];
  promedioGeneral: number;
  totalTareas: number;
  nombreCurso: string;
}

export interface IStudents {
  idStudent: string;
  nombre: string;
  sinEntregar: number;
  entregadas: number;
  promedio: number;
  listadoTareas: IListadoTareas[];
}

export interface IListadoTareas {
  name: string;
  calificacion: number;
  fecha: string;
}

export interface ListCalifState extends ApiCallState {
  studentListCalif: IListCalifications;
}
