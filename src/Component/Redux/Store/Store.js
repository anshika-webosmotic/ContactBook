import { createStore, combineReducers } from "redux";
import { loginStatus } from "../Reducer/Login";
import { Contacts } from "../Reducer/Contacts";
import { reducer as reduxFormReducer } from 'redux-form';
const reducer = combineReducers({
  loginStatus,
  form: reduxFormReducer,
  Contacts
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
