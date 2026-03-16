import React from 'react';
import {Link} from "react-router-dom";
import Breadcrumb from './Breadcumb';

function SignUp()
{
return (
<>
<Breadcrumb title="Sign up" />

<section className="gray ptb-60">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-12">
              <div className="signup-screen-wrap">
                <div className="signup-screen-single light">
                  <div className="text-center mb-4">
                    <h4 className="m-0 ft-medium">Create An Account</h4>
                  </div>
                  <form className="submit-form" action="user/profile">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">Your Name</label>
                          <input type="text" className="form-control rounded" placeholder="Amit Kumar" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">Email ID</label>
                          <input type="text" className="form-control rounded" placeholder="kumaramit@gmail.com" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="mb-1">User Name</label>
                      <input type="text" className="form-control rounded" placeholder="Username*" />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Password</label>
                      <input type="password" className="form-control rounded" placeholder="Password*" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-md full-width bg-sky text-light rounded ft-medium">Sign Up</button>
                    </div>
                   
                    <div className="form-group text-center mt-4 mb-0">
                      <p className="mb-0">Have You Already An account? <Link to="/signin" className="ft-medium text-success">Sign In</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


   </>
);
}

export default SignUp;