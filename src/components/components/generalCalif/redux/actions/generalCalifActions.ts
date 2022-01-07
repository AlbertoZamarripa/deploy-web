import { ApiCallAction } from "../../../../../redux/entities";
import { IListCalifications, IStudents } from "../../entities";

export type ListCalifRequest = ApiCallAction;
export interface ListCalifRequestSuccess extends ApiCallAction {
  students: IListCalifications;
}
export type ListCalifRequestFail = ApiCallAction;

export type CalifActions = ListCalifRequest &
  ListCalifRequestSuccess &
  ListCalifRequestFail;
