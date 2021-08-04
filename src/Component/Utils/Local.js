class Local {
  checkLogin() {
    const local = localStorage.getItem("loginUser");
    if (local) {
      return local;
    } else {
      return false;
    }
  }
  logout(){
    localStorage.removeItem('loginUser');
    return false;
  }
  authenticateLogin(loginInfo) {
    const emptyArray = [];
    if(!localStorage.getItem('contactBook')){
      localStorage.setItem('contactBook', JSON.stringify(emptyArray));
    }
    console.log("login info", loginInfo);
    let local = JSON.parse(localStorage.getItem("contactBook"));
    const testLogin = local.findIndex(function (element) {
      return (
        element.email === loginInfo.email &&
        element.password === loginInfo.password
      );
    });
    if (testLogin >= 0) {
      localStorage.setItem('loginUser', loginInfo.email);
      return true;
    } 
    return false;
  }
  create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c==='x' ? r :((r&0x3)|(0x8))).toString(16);
    });
    return uuid;
  }
  addUser(userInfo) {
    const emptyArray = [];
    if(!localStorage.getItem('contactBook')){
      localStorage.setItem('contactBook', JSON.stringify(emptyArray));
    }
    let local = JSON.parse(localStorage.getItem("contactBook"));
    const temp = {...userInfo};
    const uid = this.create_UUID();
    temp.uid = uid;
    console.log("to be added info :", temp);
    local.push(temp);
    console.log(local);
    localStorage.setItem("contactBook", JSON.stringify(local));
    localStorage.setItem(uid, JSON.stringify(emptyArray));
  }
}
export default new Local();
