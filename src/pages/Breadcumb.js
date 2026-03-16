const Breadcrumb = ({ title}) => {
    return (
    <>
    
    <section className="bg-cover position-relative pt-120 pb-60" style={{background: 'red url(/assets/images/Head-bg-img-1.jpg) no-repeat'}} data-overlay={3}>
            
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="dashboard-head-author-clicl">
                  
                    <div className="dashboard-head-author-caption text-center">
                      <div className="dashploio"><h2 className="text-white" dangerouslySetInnerHTML={{__html: title}}></h2></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
    );
    }
    
    export default Breadcrumb;