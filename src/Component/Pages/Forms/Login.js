import React, { useEffect, useState } from "react";
import { Media } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkLogin, authenticateLogin } from "../../Redux/Action/ActionLogin";
import Local from "../../Utils/Local";
import { Field, reduxForm } from "redux-form";
import { Card } from "react-bootstrap";
import validate from "./Validate";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control form-rounded mt-2"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

function Login(props) {
  const { handleSubmit, submitting } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState({});
  const myState = useSelector((state) => state.loginStatus);
  useEffect(()=>{
    dispatch(checkLogin());
    if(!myState === false){
      history.push({
        pathname: '/contact-list',
        state: myState
      })
    }
  },[myState, history , dispatch]);
  useEffect(()=>{
    dispatch(authenticateLogin(login));
  },[login, dispatch])
  const submitForm = (values) => {
    alert(JSON.stringify(values));
    setLogin(values);
  };
  return (
    <div className="bg-light p-5 d-flex justify-content-center">
      <div className="w-75 bg-primitive d-flex rounded shadow-lg">
        <div className="light bg-light w-50 rounded d-flex align-items-center justify-content-center">
          <Media className="my-2 mx-3">
            <div className="justify-content-center d-flex">
              <img
                alt="img"
                src="https://img.icons8.com/color/98/000000/story-book.png"
              />
            </div>
            <div className="justify-content-center d-flex">
              <span style={{ color: "#4682B4" }}>
                {" "}
                <h3>CONTACT BOOK</h3>
              </span>
            </div>
          </Media>
        </div>
        {/* form starts */}
        <div className="container-fluid background">
      <div className=" justify-content-center my-5">
        <div className="py-5">
          <Card className="my-3 text-left w-auto d-flex bg-transparent border-transparent border-0 text-light">
            <Card.Body>
              <Card.Title className="text-left px-3 d-flex flex-row mb-5 text-center">
                <span className="text-large ">
                  <h1>Login</h1>
                </span>
              </Card.Title>
              <Card.Text>
                <form onSubmit={handleSubmit((values => submitForm(values)))} className="">
                  <div>
                    <Field
                      name="email"
                      type="email"
                      component={renderField}
                      label="Email"
                    />
                  </div>
                  <div>
                    <Field
                      name="password"
                      type="password"
                      component={renderField}
                      label="Password"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-end">
                      {/* <div className="mt-3"><span onClick={()=>{}}>Don't have account?</span></div> */}
                      <div>
                        <button
                          type="submit"
                          disabled={submitting}
                          className=" btn-primary text-light primary mt-3  px-4 py-1"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
        {/* form ends */}
      </div>
    </div>
  );
}

export default reduxForm({
  form: "login",
  validate,
})(Login);
