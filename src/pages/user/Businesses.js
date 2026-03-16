
import User_nav from "./User_nav";
import DashboardHeader from "./DashboardHeader";

const BusinessData = [
  {
      BusinessName: 'Chukkapalli Avinash',
      image: '/assets/images/Auto-Lenders.jpg',
      slug: '/business-detail',        
      industry: 'Real Estate & Automobile Dealerships',
  BusinessAddress: 'Hyderabad',
      logo: '/assets/images/logo-search.png'       
  },
  {
      BusinessName: 'Sachet Goyal',
      image: '/assets/images/Auto-Lenders.jpg',
      slug: '/business-detail',        
      industry: 'Trading, Consultations and Real Estate',
  BusinessAddress: 'New Delhi',
      logo: '/assets/images/logo-search.png'       
  },
  {
      BusinessName: 'Aashish Sanghi',
      image: '/assets/images/Auto-Lenders.jpg',
      slug: '/business-detail',        
      industry: 'GREEN ENERGY',
  BusinessAddress: 'Chennai',
      logo: '/assets/images/logo-search.png'       
  },
  {
      BusinessName: 'Vineet kedia',
      image: '/assets/images/Auto-Lenders.jpg',
      slug: '/business-detail',        
      industry: 'Construction and Real Estate',
  BusinessAddress: 'Mumbai',
      logo: '/assets/images/logo-search.png'       
  },
  
  
  
]


function Businesses()
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
                <h1 className="ft-medium">Manage Businesses</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
                    <li className="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#" className="theme-cl">Manage Businesses</a></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="dashboard-list-wraps bg-white rounded mb-4">
                  <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                    <div className="dashboard-list-wraps-flx">
                      <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file-alt me-2 theme-cl fs-sm" />My Businesses</h4>	
                    </div>
                  </div>
                  <div className="dashboard-list-wraps-body py-3 px-3">
                    <div className="dashboard-listing-wraps">
                    {BusinessData.map((data, index) => (
                      <div className="dsd-single-listing-wraps">
                        <div className="dsd-single-lst-thumb"><img src={data.image} className="img-fluid" alt="" /></div>	
                        <div className="dsd-single-lst-caption">
                          <div className="dsd-single-lst-title"><h5>{data.BusinessName}</h5></div>
                          <span className="agd-location"><i className="lni lni-map-marker me-1" />{data.BusinessAddress}</span>
                          <div className="ico-content">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-rating">
                                <div className="Goodup-rates">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <div className="Goodup-price-range">
                                <span className="ft-medium">34 Reviews</span>
                              </div>
                            </div>	
                          </div>
                          <div className="dsd-single-lst-footer">
                            <a href="javascript:void(0);" className="btn btn-edit mr-1"><i className="fas fa-edit me-1" />Edit</a>
                            <a href={data.slug} className="btn btn-view mr-1"><i className="fas fa-eye me-1" />View</a>
                            <a href="javascript:void(0);" className="btn btn-delete"><i className="fas fa-trash me-1" />Delete</a>
                          </div>
                        </div>
                      </div>
                      ))}

                     
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

export default Businesses;