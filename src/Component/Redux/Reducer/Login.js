import { CHECK_LOGIN, AUTHENTICATE_LOGIN, LOGOUT } from "../Action/ActionLogin";
import Local from  '../../Utils/Local';
const initialState = Local.checkLogin();

export const loginStatus = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
      return (state = action.userInfo);
    case LOGOUT:
      return (state = action.userInfo);
    case AUTHENTICATE_LOGIN:
      return (state = action.userInfo);
    default:
      return state;
  }
};
