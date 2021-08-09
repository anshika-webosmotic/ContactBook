import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Forms/Login";
import SignupForm from "./Component/Pages/Forms/SignupForm";
import ContactList from "./Component/Pages/ContactList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/contact-list">
          <ContactList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
