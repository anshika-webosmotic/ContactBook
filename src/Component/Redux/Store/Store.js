import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginStatus } from "../Reducer/Login";
import { Contacts } from "../Reducer/Contacts";
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
const reducer = combineReducers({
  loginStatus,
  form: reduxFormReducer,
  Contacts
});
const storeWithMiddleware = applyMiddleware(thunk)(createStore);
const store = storeWithMiddleware(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
