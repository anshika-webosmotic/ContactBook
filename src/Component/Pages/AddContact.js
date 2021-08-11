import React from "react";
import { editContact, addContact } from "../Redux/Action/ActionContact";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";
import CustomForm from "../Pages/Forms/CustomForm";
import { logout } from "../Redux/Action/ActionLogin";

const AddContact = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const currState = useSelector((state) => state.Contacts);

  const user = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();

  const submit = (values) => {
    alert(JSON.stringify(values));
    id
      ? dispatch(editContact(values, id - 1))
      : dispatch(addContact(user, values));
    history.push({
      pathname: "/contact-list",
      state: location.state,
    });
  };

  const handleCancel = () => {
    history.push({
      pathname: "/contact-list",
      state: location.state,
    });
  };

  const handleLogOut = () => {
    dispatch(logout());
    history.push("/login");
  };

  let data = id ? { ...currState[id - 1] } : {};
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-xs-12 col-sm-12 p-2 list-background col-lg-12 d-flex justify-content-between">
            <div>
              <h2 className="text-light mx-5 my-2">Edit Contact</h2>
            </div>
            <div>
              <Dropdown className="mt-3 px-3 my-5 mx-5 rounded">
                <Dropdown.Toggle
                  variant="primary"
                  className="bg-transparent border-0"
                  size="sm"
                  id="dropdown-basic"
                >
                  {user}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item variant="primary" onClick={handleLogOut}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="row px-5 py-2 zindex bg-light">
          <div className="col col-lg-12 col-sm-12 col-md-12 justify-content-center list-table">
            <div className="card mt-3 rounded shadow">
              <div className="text-left mt-2 py-2 px-3 mx-3 d-flex justify-content-between">
                <div>
                  <h5 className="text-list mx-2">Employee</h5>
                </div>
                <button
                  className="primary mx-3 px-3 text-white py-1 add-btn border-0"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
              <div className="p-3">
                <div className="position-absolute mt-2"></div>
                <div className="p-2">
                  <CustomForm onSubmit={submit} data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
