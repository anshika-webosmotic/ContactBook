const validate = (values) => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "Required";
  } else if (values.fname.length < 2) {
    errors.fname = "Must be 2 characters or more";
  }
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if(!values.password){
    errors.password = "Required";
  }
  else if(values.password.length<2){
    errors.password = "2 or more characters required!";
  }
  if(!values.cnfPassword){
    errors.cnfPassword = "Required";
  }else if (values.cnfPassword !== values.password){
    errors.cnfPassword = "Password did not Match";
  }
  if (!values.age) {
    errors.age = "Required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Must be a number";
  } else if (Number(values.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }
  return errors;
};

export default validate