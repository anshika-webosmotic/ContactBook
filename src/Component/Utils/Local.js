class Local {
  checkLogin() {
    const local = localStorage.getItem("loginUser");
    if (local) {
      return local;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem("loginUser");
    return false;
  }
  // authenticateLogin(loginInfo) {
  //   const emptyArray = [];
  //   if (!localStorage.getItem("contactBook")) {
  //     localStorage.setItem("contactBook", JSON.stringify(emptyArray));
  //   }
  //   console.log("login info", loginInfo);
  //   let local = JSON.parse(localStorage.getItem("contactBook"));
  //   const testLogin = local.findIndex(function (element) {
  //     return (
  //       element.email === loginInfo.email &&
  //       element.password === loginInfo.password
  //     );
  //   });
  //   if (testLogin >= 0) {
  //     localStorage.setItem("loginUser", loginInfo.email);
  //     return true;
  //   }
  //   return false;
  // }
}
export default new Local();
