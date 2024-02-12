import React, { useEffect } from "react";

const Login = () => {
 
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">
                    Login to Your Account
                  </h5>
                  <p className="text-center small">
                    Enter your username &amp; password to login
                  </p>
                </div>

                <form className="row g-3 needs-validation" noValidate="">
                  <div className="col-12">
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="yourUsername"
                        required=""
                        placeholder=" Username"
                      />
                      <div className="invalid-feedback">
                        Please enter your username.
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="yourPassword"
                      required=""
                      placeholder="  Password"
                    />
                    <div className="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">
                      Don't have account?{" "}
                      <a href="pages-register.html">Create an account</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
