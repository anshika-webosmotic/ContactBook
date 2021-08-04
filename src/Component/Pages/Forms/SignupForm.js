import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../../App.css";
import { Field, reduxForm } from "redux-form";
import validate from "./Validate";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/Action/ActionLogin";
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label className="mt-2">{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
function SignupForm(props) {
  const dispatch = useDispatch();
  const { handleSubmit, reset, submitting } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => {
    reset();
    setShow(false);
  };
  const submitForm = (values) => {
    alert(JSON.stringify(values));
    dispatch(addUser(values));
    dispatch(reset("signup"));
  };
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col col-xs-12 col-sm-12 p-2 bg-dark col-lg-12 d-flex justify-content-between">
          <div>
            <h2 className="text-light"> React Contact List</h2>
          </div>
          <div className="mx-5">
            <button
              color="primary"
              size="sm"
              className="px-3 mt-2 btn-primary primary"
              onClick={handleShow}
            >
              Sign Up
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              <form onSubmit={handleSubmit((values => submitForm(values)))}>
                <Modal.Body>
                <div>
                  <div>
                    <Field
                      name="uid"
                      component="input"
                      type="text"
                      placeholder="unique id"
                      hidden = {true}
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
                </Modal.Body>
                <Modal.Footer>
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-3 py-1 btn-primary primary"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      // disabled={pristine || submitting}
                      onClick={handleClose}
                      className="mx-2 px-3 py-1 btn-warning text-light"
                    >
                      Close
                    </button>
                  </div>
                </Modal.Footer>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default reduxForm({
  form: "signup",
  enableReinitialize: true,
  destroyOnUnmount: true,
  validate,
})(SignupForm);
