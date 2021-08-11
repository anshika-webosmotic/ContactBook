import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import Login from "./Component/Pages/Forms/Login";
import SignupForm from "./Component/Pages/Forms/SignupForm";
import ContactList from "./Component/Pages/ContactList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddContact from "./Component/Pages/AddContact";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkLogin } from "../src/Component/Redux/Action/ActionLogin";
function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginState = useSelector((state) => state.loginStatus);

  useEffect(() => {
    dispatch(checkLogin());
  }, [loginState, history, dispatch]);

  console.log("loginState ", loginState);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        {loginState ? (
          <Route exact path="/contact-list">
            <ContactList />
          </Route>
        ) : null}
        {loginState ? (
          <Route exact path="/contact/" component={AddContact} />
        ) : null}
        {loginState ? (
          <Route exact path="/contact/:id" component={AddContact} />
        ) : null}
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
