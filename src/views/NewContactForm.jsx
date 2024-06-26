import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import { useNavigate, NavLink } from "react-router-dom";

const NewContactForm = () => {
  const { store, actions } = useContext(Context);

  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    await actions.createContact(formData);
    navigate(`/`);
  };


  return (
    <>
      <div className="container-fluid d-flex justify-content-center p-1">
        <h1>Create New Contact</h1>
      </div>
      <form
        onSubmit={(e) => {
          console.log("Save button clicked");
          handleCreate(e);
        }}
      >
        <div>
          <div className="container-fluid p-1">
            <div>
              <label htmlFor="formfullName" className="form-label cst-label ms-2">

                Full Name
              </label>
              <input
                className="form-control m-1"
                type="fullName"
                id="formfullName"
                placeholder="Jane"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="container-fluid p-1">
            <div>
              <label htmlFor="formEmail" className="form-label cst-label ms-2">

                Email
              </label>
              <input
                className="form-control m-1"
                type="email"
                id="formEmail"
                placeholder="JaneDoe@gmail.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="container-fluid p-1">
            <div>
              <label htmlFor="formPhone" className="form-label cst-label ms-2">

                Phone
              </label>
              <input
                className="form-control m-1"
                type="Phone"
                id="formPhone"
                placeholder="+56912345678"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="container-fluid p-1">
            <div>
              <label htmlFor="formAddress" className="form-label cst-label ms-2">

                Address
              </label>
              <input
                className="form-control m-1"
                type="Address"
                id="formAddress"
                placeholder="Unknown, Chile"
                value={formData.address}
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-around p-1">
          <button className="btn btn-primary  form-submit w-25" type="submit">

            Create Contact
          </button>
          <NavLink className="btn btn-primary w-25" to="/">

            Back to Contacts
          </NavLink>
        </div>
      </form>

    </>
  );
};

export default NewContactForm;