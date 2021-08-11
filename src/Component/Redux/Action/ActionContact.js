import Local from "../../Utils/Local";
export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const GET_CONTACT = "GET_CONTACT";
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const addContact = (user, contactInfo) => {
  const updatedContact = Local.addContact(user, contactInfo);
  return {
    type: GET_CONTACT,
    contactInfo: updatedContact,
  };
};
export const removeContact = (contactInfo) => {
  const updatedContact = Local.removeContact(contactInfo);
  return {
    type: GET_CONTACT,
    contactInfo: updatedContact,
  };
};
export const editContact = (contactInfo, update) => {
  const updatedContact = Local.editContact(contactInfo, update);
  return {
    type: GET_CONTACT,
    contactInfo: updatedContact,
  };
};
export const getContacts = () => {
  const updatedContact = Local.getContacts();
  return {
    type: GET_CONTACT,
    contactInfo: updatedContact,
  };
};
