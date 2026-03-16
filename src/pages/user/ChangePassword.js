
import User_nav from "./User_nav";
import DashboardHeader from "./DashboardHeader";

function ChangePassword()
{
return (
<>
<DashboardHeader />
<section className="goodup-dashboard-wrap gray px-4 py-5">
<User_nav />
        <div className="goodup-dashboard-content">
          <div className="dashboard-tlbar d-block mb-5">
            <div className="row">
              <div className="colxl-12 col-lg-12 col-md-12">
                <h1 className="ft-medium">Change Password</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
                    <li className="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#" className="theme-cl">Change Password</a></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="_dashboard_content bg-white rounded mb-4">
                  <div className="_dashboard_content_header br-bottom py-3 px-3">
                    <div className="_dashboard__header_flex">
                      <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-lock me-2 theme-cl fs-sm" />Change Password</h4>	
                    </div>
                  </div>
                  <div className="_dashboard_content_body py-3 px-3">
                    <form className="row submit-form">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Old Password</label>
                          <input type="text" className="form-control rounded" placeholder />
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>New Password</label>
                          <input type="text" className="form-control rounded" placeholder />
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input type="text" className="form-control rounded" placeholder />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="form-group">
                          <button type="submit" className="btn btn-md ft-medium text-light rounded theme-bg">Save Changes</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>

    

   </>
);
}

export default ChangePassword;