import { IListCalifications } from "../../entities";
import {
  ListCalifRequest,
  ListCalifRequestSuccess,
  ListCalifRequestFail,
} from "./generalCalifActions";
import { GeneralCalifTypes } from "./generalCalifTypes";

export const listCalifRequest = (): ListCalifRequest => ({
  type: GeneralCalifTypes.LIST_CALIF_REQUEST,
});
export const listCalifRequestSuccess = (
  students: IListCalifications
): ListCalifRequestSuccess => ({
  type: GeneralCalifTypes.LIST_CALIF_REQUEST_SUCCESS,
  students,
});
export const listCalifRequestFail = (error: Error): ListCalifRequestFail => ({
  type: GeneralCalifTypes.LIST_CALIF_REQUEST_FAIL,
  error,
});
