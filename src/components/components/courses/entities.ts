import { ApiCallState } from "../../../redux/entities";

export interface ICourse {
  id?: string;
  name: string;
  createdAt?: Date;
  status: string;
  description?: string;
  idCourse: string;
}

export interface INewCourse {
  name: string;
}

export interface IUpdateCourse {
  id: string;
  name: string;
}
export interface CourseState extends ApiCallState {
  courseList: ICourse[];
  editing?: ApiCallState & { course: ICourse };
  creating?: { course: ICourse };
}
