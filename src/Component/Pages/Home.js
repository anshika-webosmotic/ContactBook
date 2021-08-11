import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();

  const currentState = useSelector((state) => state.loginStatus);
  useEffect(() => {
    // if (!currentState === false) {
    //   history.push("/contact-list");
    // } else {
    //   history.push("/login");
    // }
  }, [currentState, history]);
  return <>home page</>;
}
export default Home;
