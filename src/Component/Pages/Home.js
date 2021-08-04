import React, { useEffect } from "react";
import { checkLogin } from "../Redux/Action/ActionLogin";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(checkLogin());
  const currentState = useSelector((state) => state.loginStatus);
  useEffect(() => {
    if (!currentState=== false) {
      history.push("/contact-list");
    } else {
      history.push("/login");
    }
  });
  return <>home page</>;
}
export default Home;
