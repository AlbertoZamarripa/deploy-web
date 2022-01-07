import { MenuType } from "../actions/generalActionTypes";

const initialState = { status: false };

export default function (state = initialState, action: any) {
  const { type } = action;
  switch (type) {
    case MenuType.OPEN:
      return {
        status: true,
      };
    case MenuType.CLOSE:
      return {
        status: false,
      };
    default:
      return {
        status: false,
      };
  }
}
