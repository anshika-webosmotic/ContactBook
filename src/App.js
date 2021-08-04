import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Component/Pages/Home';
import Login from './Component/Pages/Forms/Login';
import SignupForm from './Component/Pages/Forms/SignupForm';
import ContactList from './Component/Pages/ContactList'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/login">
        <SignupForm/><Login/>
      </Route>
      <Route exact path="/contact-list"><ContactList/></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
