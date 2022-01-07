import { MenuType } from "./generalActionTypes";

const toggleMenu = (status: boolean) => (dispatch: any) => {
  if (status) {
    dispatch({
      type: MenuType.OPEN,
      payload: true,
    });
  } else {
    dispatch({
      type: MenuType.CLOSE,
      payload: false,
    });
  }
};

export default {
  toggleMenu,
};
