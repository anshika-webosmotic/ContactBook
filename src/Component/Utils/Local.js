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
  getContacts() {
    const currUser = this.checkLogin();
    const uid = this.getUid(currUser);
    const temp = JSON.parse(localStorage.getItem(uid));
    return temp;
  }
  getUid(username) {
    const temp = JSON.parse(localStorage.getItem("contactBook"));
    console.log(temp);
    const obj = temp.findIndex(function (element) {
      return element.email === username;
    });
    const uid = temp[obj].uid;
    return uid;
  }

  removeContact(delContact){
    const username = this.checkLogin();
    const uid = this.getUid(username);
    const contact = JSON.parse(localStorage.getItem(uid));
    const contactIndex = contact.findIndex(function (element) {
      return JSON.stringify(delContact) === JSON.stringify(element);
    });
    contact.splice(contactIndex, 1);
    localStorage.setItem(uid, JSON.stringify(contact));
    return contact;
  }

  editContact(contacts, update) {
    const username = this.checkLogin();
    console.log(update, contacts);
    const uid = this.getUid(username);
    const contact = JSON.parse(localStorage.getItem(uid));
    contact[update] = contacts;
    localStorage.setItem(uid, JSON.stringify(contact));
    return contact;
  }

  addContact(username, contactInfo) {
    console.log("username", username, "contact", contactInfo);
    const uid = this.getUid(username);
    console.log(uid);
    if (localStorage.getItem(uid)) {
      const tempContact = JSON.parse(localStorage.getItem(uid));
      const isPresent = tempContact.findIndex(function (element) {
        console.log(element, contactInfo);
        return JSON.stringify(contactInfo) === JSON.stringify(element);
      });
      console.log(isPresent);
      if (isPresent < 0) {
        tempContact.push(contactInfo);
        localStorage.setItem(uid, JSON.stringify(tempContact));
        return tempContact;
      } else {
        alert("Record already exist!!");
        return null;
      }
    } else {
      const contactArray = [];
      contactArray.push(contactInfo);
      localStorage.setItem(uid, JSON.stringify(contactArray));
      return contactArray;
    }
  }
}
export default new Local();
