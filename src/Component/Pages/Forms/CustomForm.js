import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { load as LoadEdit } from "../../Redux/Reducer/EditReducer";
import validate from "./Validate";
import renderField from "./RenderField";

let CustomForm = (props) => {
  const { handleSubmit, submitting, load } = props;
  const data = props.data;

  load(data);
  return (
    <div className="container-fluid  ">
      {/* table */}
      {/* <CustomForm onSubmit={props.onSubmit}/> */}
      <form onSubmit={handleSubmit}>
        <Field
          className="form-control"
          name="fname"
          type="txt"
          component={renderField}
          label="Full Name"
          id="fname"
        />
        <Field
          className=""
          name="email"
          type="email"
          component={renderField}
          label="Email"
          id="email"
        />
        <Field
          className=""
          name="phone"
          id="phone"
          type="txt"
          component={renderField}
          label="Phone"
        />
        <button
          className="primary  mt-3 px-3 text-white py-1 add-btn border-0"
          type="submit"
          disabled={submitting}
        >
          Save
        </button>
      </form>
    </div>
  );
};

CustomForm = reduxForm({
  form: "CustomForm",
  enableReinitialize: true,
  destroyOnUnmount: true,
  validate,
})(CustomForm);

CustomForm = connect(
  (state) => ({
    initialValues: state.account.data,
  }),
  { load: LoadEdit }
)(CustomForm);
export default CustomForm;
