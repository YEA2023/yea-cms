import {Link} from "react-router-dom";
import Breadcrumb from './Breadcumb';

function SignIn()
{
return (
<>
<Breadcrumb title="Sign in" />

      <section className="gray ptb-60">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-xl-5 col-lg-8 col-md-12">
              <div className="signup-screen-wrap">
                <div className="signup-screen-single">
                  <div className="text-center mb-4">
                    <h4 className="m-0 ft-medium">Login Your Account</h4>
                  </div>
                  <form className="submit-form" action="user/profile">				
                    <div className="form-group">
                      <label className="mb-1">User Name</label>
                      <input type="text" className="form-control rounded" placeholder="Username*" />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Password</label>
                      <input type="password" className="form-control rounded" placeholder="Password*" />
                    </div>
                    <div className="form-group">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-1">
                          <input id="dd" className="checkbox-custom" name="dd" type="checkbox" defaultChecked />
                          <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                        </div>	
                        <div className="eltio_k2">
                          <a href="#" className="theme-cl">Lost Your Password?</a>
                        </div>	
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Sign In</button>
                    </div>
                  
                    <div className="form-group text-center mt-4 mb-0">
                      <p className="mb-0">You Don't have any account?  <Link to="/signup" className="ft-medium text-success">Sign Up</Link></p>
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

export default SignIn;