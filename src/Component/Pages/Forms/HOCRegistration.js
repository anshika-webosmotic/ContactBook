import React from "react";
import { Media } from "react-bootstrap";

const HOCRegistration = (OriginalComp) => {
  function newComponent() {
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
          <div className="container-fluid background">
            <div className="justify-content-center my-5">
              <div className="py-5">
                <OriginalComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return newComponent;
};

export default HOCRegistration;
