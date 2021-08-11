import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import { logout } from "../Redux/Action/ActionLogin";
import { Table, Dropdown } from "react-bootstrap";
import "../../App.css";
import contactArray from "../Utils/ContactForm";
import { getContacts, removeContact } from "../Redux/Action/ActionContact";
function ContactList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const loginState = useSelector((state) => state.loginStatus);
  const currentRecords = useSelector((state) => state.Contacts);

  const handleLogOut = () => {
    dispatch(logout());
    history.push("/login");
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch, loginState, history]);

  const handleEdit = (index) => {
    history.push({
      pathname: `/contact/${index}`,
      state: location.state,
    });
  };
  const handleDelete = (obj) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(removeContact(obj));
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-xs-12 col-sm-12 p-2 list-background col-lg-12 d-flex justify-content-between">
          <div>
            <h2 className="text-light mx-5 my-2">Contact Book</h2>
          </div>
          <div>
            <Dropdown className="mt-3 px-3 my-5 mx-5 rounded">
              <Dropdown.Toggle
                variant="primary"
                className="bg-transparent border-0"
                size="sm"
                id="dropdown-basic"
              >
                {loginState}
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
        <div className="col col-lg-12 col-sm-12 cl-md-12 justify-content-center list-table">
          <div className="card mt-3 rounded shadow">
            <div className=" text-left mt-2 py-2 px-3 mx-2">
              <h5 className="text-list">Employee</h5>
            </div>
            <div className="p-3">
              <div className="position-absolute mt-2">
                <Link
                  to={{
                    pathname: "/contact",
                    state: location.state,
                  }}
                >
                  <button className="add-btn py-1 primary text-white border-0 px-3">
                    Add New
                  </button>
                </Link>
              </div>
              <div className="p-2">
                {currentRecords !== null ? (
                  <div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <span className="px-1">
                          <b className="text-list">Page: </b>1
                        </span>
                      </div>
                    </div>
                    <Table bordered hover id="sortTable">
                      <thead variant="dark">
                        <tr>
                          <th className="text-list">Sno</th>
                          {contactArray.map((element, index) => (
                            <th className="text-list" key={index}>
                              {element.key}
                            </th>
                          ))}
                          <th className="text-list">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentRecords.length
                          ? currentRecords.map((element, index) => (
                              <tr key={index} className="my-2">
                                <td>{index + 1}</td>
                                {Object.keys(element).map((ele, i) => (
                                  <td key={index + i + "td"}>{element[ele]}</td>
                                ))}
                                <td className="d-flex justify-content-center">
                                  <div
                                    type="button"
                                    className="success"
                                    onClick={() => handleDelete(element)}
                                  >
                                    <img
                                      alt="del"
                                      src="https://img.icons8.com/material-sharp/24/4a90e2/delete-forever.png"
                                    />
                                  </div>
                                  <div
                                    type="button"
                                    className=""
                                    onClick={() => {
                                      handleEdit(index+1);
                                    }}
                                  >
                                    <img
                                      alt="edit"
                                      src="https://img.icons8.com/material-outlined/24/4a90e2/edit-file--v1.png"
                                    />
                                  </div>
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </Table>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
