import Local from "../../Utils/Local";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATE_LOGIN = "AUTHENTICATE_LOGIN";
export const ADD_USER = "ADD_USER";
export const checkLogin = () => {
  const status = Local.checkLogin();
  return {
    type: CHECK_LOGIN,
    userInfo: status,
  };
};
export const addUser = (userInfo) => {
  const userContacts = Local.addUser(userInfo);
  return {
    type: ADD_USER,
    userInfo: userContacts,
  };
};
export const authenticateLogin = (loginInfo) => {
  const userContacts = Local.authenticateLogin(loginInfo);
  return {
    type: AUTHENTICATE_LOGIN,
    userInfo: userContacts,
  };
};
export const logout = () => {
  const userContacts = Local.logout();
  return {
    type: LOGOUT,
    userInfo: userContacts,
  };
};