import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {logout , checkLogin } from "../Redux/Action/ActionLogin";

function ContactList() {
  const dispatch = useDispatch();
  const history = useHistory();
  dispatch(checkLogin());
  const myState = useSelector((state) => state.loginStatus);
  const handleLogOut = () =>{
    dispatch(logout());
  }
  useEffect(() => {
    if(myState === false){
      history.push('/login');
    }
  }, [dispatch , myState , history])
  return (
  <div>Contact list Page
    <button onClick={handleLogOut}>Logout</button>
  </div>
  );
}

export default ContactList;
