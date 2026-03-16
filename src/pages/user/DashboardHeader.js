function DashboardHeader()
{
return (
<>


<section className="bg-cover position-relative pt-120 pb-60" style={{background: 'red url(/assets/images/Head-bg-img-1.jpg) no-repeat'}} data-overlay={3}>
        <div className="abs-list-sec"><a href="/user/bsuiness-add" className="add-list-btn"><i className="fas fa-plus me-2" />Add Business</a></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="dashboard-head-author-clicl">
                <div className="dashboard-head-author-thumb">
                  <img src="/assets/images/Subhakar-Alapati.jpg" className="img-fluid" alt="" />
                </div>
                <div className="dashboard-head-author-caption">
                  <div className="dashploio"><h4>Subhakar Alapati</h4></div>
                  <div className="dashploio"><span className="agd-location"><i className="lni lni-map-marker me-1" />Hyderabad</span></div>
                  <div className="listing-rating high"><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

   </>
);
}

export default DashboardHeader;