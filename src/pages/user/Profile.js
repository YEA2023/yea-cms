
import User_nav from "./User_nav";
import DashboardHeader from "./DashboardHeader";

function Profile()
{
return (
<>

<DashboardHeader />

<div className="goodup-dashboard-wrap gray px-4 py-5">
<User_nav />
        <div className="goodup-dashboard-content">
        <div className="dashboard-tlbar d-block mb-5">
            <div className="row">
              <div className="colxl-12 col-lg-12 col-md-12">
                <h1 className="ft-medium">Hello, Subhakar Alapati</h1>
               
              </div>
            </div>
          </div>
          
          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 order-xl-last order-lg-last order-md-last">
                <div className="d-flex bg-white rounded px-3 py-3 mb-3">
                  <div className="dash-figure">
                    <div className="dash-figure-thumb"><img src="/assets/images/Subhakar-Alapati.jpg" className="img-fluid rounded" alt="" /></div>
                    <div className="upload-photo-btn">
                      <div className="Uploadphoto">
                        <span><i className="fas fa-upload" /> Upload Photo</span>
                        <input type="file" className="upload" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12">
                <form className="submit-form">
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-user-check me-2 theme-cl fs-sm" />My Profile</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">First Name</label>
                            <input type="text" className="form-control rounded" placeholder="Subhakar" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Last Name</label>
                            <input type="text" className="form-control rounded" placeholder="Alapati" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Email ID</label>
                            <input type="text" className="form-control rounded" placeholder="alapati@gmail.com" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Mobile</label>
                            <input type="text" className="form-control rounded" placeholder="+91 9123 456 789" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">State</label>
                            <select className="form-control">
                              <option>Uttar Pradesh</option>
                              <option>Uttrakhand</option>
                              <option>Gujrat</option>
                              <option>Mumbai</option>
                              <option>Karnatak</option>
                              <option>Goa</option>
                              <option>Punjab</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">City</label>
                            <select className="form-control">
                              <option>Aligarh</option>
                              <option>Allahabad</option>
                              <option>Agra</option>
                              <option>Gonda</option>
                              <option>Lucknow</option>
                              <option>Meeruth</option>
                              <option>Gaziabad</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Address</label>
                            <input type="text" className="form-control rounded" placeholder="USA 20TH Berlin Market NY" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Zip Code</label>
                            <input type="text" className="form-control rounded" placeholder="HQ125478" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">About Notes</label>
                            <textarea className="form-control rounded ht-150" placeholder="Describe your self" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-user-friends me-2 theme-cl fs-sm" />My Social Links</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-facebook theme-cl me-1" />Facebook</label>
                            <input type="text" className="form-control rounded" placeholder="https://facebook.com/" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-twitter theme-cl me-1" />Twitter</label>
                            <input type="text" className="form-control rounded" placeholder="https://twitter.com/" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-instagram theme-cl me-1" />Instagram</label>
                            <input type="text" className="form-control rounded" placeholder="https://instagram.com/" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-linkedin theme-cl me-1" />Linkedin</label>
                            <input type="text" className="form-control rounded" placeholder="https://linkedin.com/" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <button className="btn theme-bg rounded text-light">Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    

   </>
);
}

export default Profile;