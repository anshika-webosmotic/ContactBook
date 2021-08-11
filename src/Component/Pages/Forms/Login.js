import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authenticateLogin } from "../../Redux/Action/ActionLogin";
import Local from "../../Utils/Local";
import { Field, reduxForm } from "redux-form";
import { Card } from "react-bootstrap";
import validate from "./Validate";
import renderField from "./RenderField";
import "../../../App.css";
import HOCRegistration from "./HOCRegistration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const { handleSubmit, submitting, reset } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const submitForm = (values) => {
    dispatch(authenticateLogin(values)).then((res) => {
      if (!res.shouldLogin) {
        notifyWarn();
      } else {
        history.push({
          pathname: "/contact-list",
          state: Local.checkLogin(),
        });
      }
    });
    dispatch(reset("login"));
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  function notifyWarn() {
    toast.warn("Sorry !! Incorrect Credentials");
  }

  return (
    <Card className="my-3 text-left w-auto d-flex bg-transparent border-transparent border-0 text-light">
      <Card.Body>
        <Card.Title className="text-left px-3 d-flex flex-row mb-5 text-center">
          <span className="text-large">
            <h1>Login</h1>
          </span>
        </Card.Title>
        <Card.Text>
          <form onSubmit={handleSubmit((values) => submitForm(values))}>
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
              <div className="d-flex justify-content-between">
                <div className="mt-3">
                  <span
                    className="pointer"
                    onClick={() => {
                      handleSignup();
                    }}
                  >
                    Don't have account?
                  </span>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary text-light primary mt-3 px-4 py-1"
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
  );
}

export default HOCRegistration(
  reduxForm({
    form: "login",
    validate,
  })(Login)
);
