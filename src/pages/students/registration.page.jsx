import React, { useRef } from "react";
import RegistrationForm from "../../components/students/registration-form/registration-form.component";
import Image from "../../assets/2025/login_image.png";
import { Link } from "react-router-dom";
const RegistrationPage = () => {
  const signUpRef = useRef(null);
  const executeScroll = () => signUpRef.current.scrollIntoView();
  return (
    <div
      className="flex bg-dirtywhite login-page-wrapper p-5"
      style={{ height: "auto", minHeight: "100vh" }}
    >
      <div className="flex card bg-gradient login-page-container">
        <div className="col-6 col-md-12 animate__animated animate__fadeInRightBig flex-column p-2 pl-6 pr-6 registration-image">
          <img src={Image} alt="Tosia" />
        </div>
        <div
          className="col-6 col-md-12  animate__animated animate__fadeInLeftBig bg-white"
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
          ref={signUpRef}
        >
          <div
            className="p-1 login-page-login-form"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <p className="text-body m-0 text-grey"> REGISTER FOR FREE </p>
              <h2 className="text-title-big text-blue m-0">Register</h2>
            </div>

            <RegistrationForm />

            <center>
              <p className="text-body mt-1 text-grey">
                <label> ALREADY A MEMBER? </label>{" "}
                <Link to="/login"> LOG IN</Link>
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
