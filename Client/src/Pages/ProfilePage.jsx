import { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLogin } from "./LogInPage/LoginSlice";

const ProfilePage = () => {
  const navigate = useNavigate();
  const login = useSelector(selectLogin);

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (!login) {
      navigate(-1);
    }
  }, []);
  return (
    <MDBContainer className="p-4 overflow-hidden">
      <MDBRow center>
        <MDBCol md="6" className="position-relative">
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <h4
                className="text-center display-3 fw-bold ls-tight "
                style={{ color: "#f7744f" }}
              >
                Email <br />
              </h4>
              <form>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  value={formValue.email}
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  onChange={onChange}
                  required
                />

                <input
                  type="submit"
                  className="btn btn-primary w-100 mt-4"
                  value="Sign Up"
                  style={{ backgroundColor: "#f7744f" }}
                />
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ProfilePage;
