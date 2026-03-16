
import User_nav from "./User_nav";
import DashboardHeader from "./DashboardHeader";


function BusinessAdd()
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
                <h1 className="ft-medium">Add Listing</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
                    <li className="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#" className="theme-cl">Add Listing</a></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-12 col-lg-2 col-md-12 col-sm-12">
                <div className="submit-form">
                  {/* Listing Info */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file me-2 theme-cl fs-sm" />Listing Info</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Business Name</label>
                            <input type="text" className="form-control rounded" placeholder="Business Name" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Owner/Founder Name</label>
                            <input type="text" className="form-control rounded" placeholder="Owner/Founder Name" />
                          </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Industry/Sector</label>
                            <select className="form-control">
                              <option>Hotel &amp; Spa</option>
                              <option>Education</option>
                              <option>Wedding</option>
                              <option>Restaurents</option>
                              <option>Cafe &amp; Bars</option>
                              <option>Bankings</option>
                              <option>Services</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Business Description</label>
                            <textarea className="form-control rounded ht-150" placeholder="Business Description" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Number of Employees</label>
                            <input type="text" className="form-control rounded" placeholder="Number of Employees" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Annual Revenue</label>
                            <input type="text" className="form-control rounded" placeholder="Annual Revenue" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Business Type</label>
                            <input type="text" className="form-control rounded" placeholder="Business Type (e.g., Sole Proprietorship, LLC, Corporation)" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Target Market/Customer Base</label>
                            <input type="text" className="form-control rounded" placeholder="Target Market/Customer Base" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Location Info */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fas fa-map-marker-alt me-2 theme-cl fs-sm" />Business Address</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Latitude</label>
                            <input type="text" className="form-control rounded" placeholder={8054256} />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Longitude</label>
                            <input type="text" className="form-control rounded" placeholder={-7254625} />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27437.803590312993!2d76.75937213955079!3d30.726117899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda9761bdc2f%3A0x5e764f7f18edc390!2sMidpoint%20Cafe!5e0!3m2!1sen!2sin!4v1649569611177!5m2!1sen!2sin" className="full-width" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Mobile</label>
                            <input type="text" className="form-control rounded" placeholder="Mobile" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Email</label>
                            <input type="text" className="form-control rounded" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Website</label>
                            <input type="text" className="form-control rounded" placeholder="Website" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Year Established</label>
                            <input type="text" className="form-control rounded" placeholder="Year Established" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Image & Gallery Option */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-camera me-2 theme-cl fs-sm" />Image &amp; Gallery Option</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        {/* Logo */}
                        <div className="col-lg-4 col-md-6">
                          <label className="mb-1">Upload Logo</label>
                          <form action="#" className="dropzone" id="single-logo">
                            <i className="fas fa-upload" />
                          </form>
                          <label className="smart-text">Maximum file size: 2 MB.</label>
                        </div>
                        {/* Featured Image */}
                        <div className="col-lg-4 col-md-6">
                          <label className="mb-1">Featured Image</label>
                          <form action="#" className="dropzone" id="featured-image">
                            <i className="fas fa-upload" />
                          </form>
                          <label className="smart-text">Maximum file size: 2 MB.</label>
                        </div>
                        {/* Gallery */}
                        <div className="col-lg-4 col-md-12">
                          <label className="mb-1">Image Gallery</label>
                          <form action="#" className="dropzone" id="gallery">
                            <i className="fas fa-upload" />
                          </form>
                          <label className="smart-text">Maximum file size: 2 MB.</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Menu Items */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fas fa-utensils me-2 theme-cl fs-sm" />Products/Services Offered</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Products/Services Name</label>
                            <input type="text" className="form-control rounded" placeholder="Products/Services Name" />
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Category</label>
                            <input type="text" className="form-control rounded" placeholder="Product/Service" />
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Price</label>
                            <input type="text" className="form-control rounded" placeholder="ex. 49 INR" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">About Product/Service</label>
                            <textarea className="form-control rounded ht-80" placeholder="Describe your Product/Service" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="formFileLg" className="form-label">Upload Product/Service Image</label>
                            <input className="form-control rounded" id="formFileLg" type="file" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <button type="button" className="btn theme-cl rounded theme-bg-light ft-medium">Add New</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  {/* Social Links */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-user-friends me-2 theme-cl fs-sm" />Social Links</h4>	
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
                            <button className="btn theme-bg rounded text-light">Submit &amp; Preview</button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default BusinessAdd;