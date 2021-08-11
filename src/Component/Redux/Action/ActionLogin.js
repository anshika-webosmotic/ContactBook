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

const create_UUID = () => {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};
export const addUser = (userInfo) => {
  return (dispatch) => {
    return new Promise((response, reject) => {
      const emptyArray = [];
      if (!localStorage.getItem("contactBook")) {
        localStorage.setItem("contactBook", JSON.stringify(emptyArray));
      }
      let local = JSON.parse(localStorage.getItem("contactBook"));
      const newEntry = local.findIndex(function (element) {
        return element.email === userInfo.email;
      });
      if (newEntry < 0) {
        const temp = { ...userInfo };
        const uid = create_UUID();
        temp.uid = uid;
        local.push(temp);
        localStorage.setItem("contactBook", JSON.stringify(local));
        localStorage.setItem(uid, JSON.stringify(emptyArray));
        return response({ isReg: true });
      } else {
        return response({ isReg: false });
      }
    });
  };
};
export const authenticateLogin = (loginInfo) => {
  return (dispatch) => {
    return new Promise((response, reject) => {
      const emptyArray = [];
      if (!localStorage.getItem("contactBook")) {
        localStorage.setItem("contactBook", JSON.stringify(emptyArray));
      }
      let local = JSON.parse(localStorage.getItem("contactBook"));
      const testLogin = local.findIndex(function (element) {
        return (
          element.email === loginInfo.email &&
          element.password === loginInfo.password
        );
      });
      if (testLogin >= 0) {
        localStorage.setItem("loginUser", loginInfo.email);
        dispatch({
          type: AUTHENTICATE_LOGIN,
          userInfo: true,
        });
        return response({ shouldLogin: true });
      } else {
        return response({ shouldLogin: false });
      }
    });
  };
};
export const logout = () => {
  const userContacts = Local.logout();
  return {
    type: LOGOUT,
    userInfo: userContacts,
  };
};
