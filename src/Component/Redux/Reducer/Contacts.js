import Local from "../../Utils/Local";
import {
  ADD_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT,
} from "../Action/ActionContact";

const initialState = () => {
  return Local.getContacts();
};

export const Contacts = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return (state = action.contactInfo);
    case EDIT_CONTACT:
      return (state = action.contactInfo);
    case ADD_CONTACT:
      return (state = action.contactInfo);
    default:
      return state;
  }
};
