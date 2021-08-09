import Local from '../../Utils/Local'

const initialState = () => {
  return Local.checkLogin();
};

export const Contacts = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
