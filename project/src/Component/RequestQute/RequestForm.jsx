import { useState } from "react";

const RequestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Company, setCompany] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Email, setEmail] = useState("");
  const [ZipCode, setZipCode] = useState();
  const [Detail, setDetails] = useState("");
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5>Request Your Quote</h5>
        </div>
        <div className="card-body">
          <div className="row ">
            <div className="col-lg-6">
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-5 col-form-label"
                >
                  First name:
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-5 col-form-label"
                >
                  Last name:
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-6 col-form-label"
                >
                  Company name:
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-5 col-form-label"
                >
                  Phone:
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
					placeholder="xxxx-xxxxxxx"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-5 col-form-label"
                >
                  Emial:
                </label>
                <div className="col-sm-7">
                  <input
                    type="emial"
                    className="form-control"
                    id=""
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
					placeholder="xyz@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-5 col-form-label"
                >
                  Zip Code:
                </label>
                <div className="col-sm-7">
                  <input
                    type="emial"
                    className="form-control"
                    id=""
                    onChange={(e) => {
                      setZipCode(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="mb-3">
                <label htmlFor="inputEmail3" className="form-label">
                  What packaging product(s) are you interested in?
                </label>
                <select
                  className="form-select special-input"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" mb-3">
                <label htmlFor="inputEmail3" className="form-label">
                  Zip Code:
                </label>
                <input
                  type="text"
                  className="form-control special-input"
                  id=""
                  onChange={(e) => {
                    setZipCode(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className=" mb-3">
                <label htmlFor="inputEmail3" className="form-label">
                  Zip Code:
                </label>
                <input
                  type="text"
                  className="form-control special-input"
                  id=""
                />
              </div>
            </div> */}
            <div className="col-12">
              <h6>
                Add project details <span>(Optional)</span>
              </h6>
              <div className=" mb-3">
                <label htmlFor="inputEmail3" className="form-label">
                  Please provide relevant information so we can process the
                  order faster
                </label>
                <textarea
                  className="form-control special-input"
                  rows="5"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn-brnad py-3 px-5">REQUEST QUOTE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RequestForm;
