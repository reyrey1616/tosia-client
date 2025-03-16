import React, { useRef, useEffect } from "react";
import LoginForm from "../../components/admin/login-form/login-form.component";
import Image from "../../assets/2025/login_image.png";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../../utils/errorCatch";
import { notify } from "../../components/global/alerts/alerts.component";
import { useHistory } from "react-router-dom";

const token = localStorage.getItem("atkn");
const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    (async function loadStudent() {
      if (token) {
        setAuthToken(token);
        try {
          const request = await axios.get("/auth/get-admin");
          const response = request.data;
          if (response.success) {
            notify("Login Success!", "success", "Welcome to TOSIA");
            setTimeout(() => {
              history.push("/admin/students");
            }, 1500);
          } else {
            throw Error;
          }
        } catch (error) {
          errorCatch(error, "Login Failed");
        }
      }
    })();
  }, []);

  const signUpRef = useRef(null);

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
          className="col-6 col-md-12 animate__animated animate__fadeInLeftBig bg-white"
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
          ref={signUpRef}
        >
          <div
            className="p-1 pr-3 pl-3 login-page-login-form"
            style={{ justifyContent: "space-evenly" }}
          >
            <div>
              <p className="text-body m-0 text-grey"> WELCOME BACK!</p>
              <h2 className="text-title text-blue m-0 ">
                Please login your account.
              </h2>
            </div>

            <LoginForm />
            <center>
              <p className="text-grey">
                Copyright © 2021 | JCI REGATTA ILOILO | TOSIA
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
