import React from "react";
import "../../../App.css";
import { Card } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import validate from "./Validate";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/Action/ActionLogin";
import renderField from "./RenderField";
import { useHistory } from "react-router-dom";
import HOCRegistration from "./HOCRegistration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, reset, submitting } = props;

  function notifySuccess() {
    toast.success("You Have Registered Successfully");
  }
  function notifyWarn() {
    toast.warn("Sorry !! This email id already exist");
  }

  const submitForm = (values) => {
    dispatch(addUser(values)).then((res) => {
      if (res.isReg) {
        notifySuccess();
        history.push("/login");
      } else {
        notifyWarn();
      }
    });
    dispatch(reset("signup"));
  };

  const handleBack = () => {
    history.push("/login");
  };

  return (
    <Card className="my-3 text-left w-auto d-flex bg-transparent border-transparent border-0 text-light">
      <Card.Body>
        <Card.Title className="text-left px-3 d-flex flex-row mb-5 text-center">
          <span className="text-large">
            <h1>Signup</h1>
          </span>
        </Card.Title>
        <Card.Text>
          <form onSubmit={handleSubmit((values) => submitForm(values))}>
            <div>
              <div>
                <Field
                  name="uid"
                  component="input"
                  type="text"
                  placeholder="unique id"
                  hidden={true}
                />
              </div>
            </div>
            <div>
              <div>
                <Field
                  label="Email"
                  name="email"
                  component={renderField}
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div>
                <Field
                  label="Password"
                  name="password"
                  component={renderField}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <div>
                <Field
                  label="Confirm Password"
                  name="cnfPassword"
                  component={renderField}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-end">
              <button
                type="submit"
                disabled={submitting}
                className="px-3 py-1 btn-primary primary"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="mx-2 px-3 py-1 btn-warning text-light"
              >
                Back
              </button>
            </div>
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default HOCRegistration(
  reduxForm({
    form: "signup",
    enableReinitialize: true,
    destroyOnUnmount: true,
    validate,
  })(SignupForm)
);
