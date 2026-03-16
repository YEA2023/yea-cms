const BusinessData = [
    {
        id: 1,
        BusinessName: 'Chukkapalli Avinash',
        image: '/assets/images/Auto-Lenders.jpg',
        slug: '',        
        industry: 'Real Estate & Automobile Dealerships',
		BusinessAddress: 'Hyderabad',
        logo: '/assets/images/logo-search.png'       
    },
    {
        id: 2,
        BusinessName: 'Sachet Goyal',
        image: '/assets/images/Auto-Lenders.jpg',
        slug: '',        
        industry: 'Trading, Consultations and Real Estate',
		BusinessAddress: 'New Delhi',
        logo: '/assets/images/logo-search.png'       
    },
    {
        id: 3,
        BusinessName: 'Aashish Sanghi',
        image: '/assets/images/Auto-Lenders.jpg',
        slug: '',        
        industry: 'GREEN ENERGY',
		BusinessAddress: 'Chennai',
        logo: '/assets/images/logo-search.png'       
    },
    {
        id: 4,
        BusinessName: 'Vineet kedia',
        image: '/assets/images/Auto-Lenders.jpg',
        slug: '',        
        industry: 'Construction and Real Estate',
		BusinessAddress: 'Mumbai',
        logo: '/assets/images/logo-search.png'       
    },
    
    
    
]

function BusinessesListing()
{
return (
<>
<section className="ptb-60">
<div className="container">
  <div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
      <div className="sec_title position-relative text-center mb-5">
        <h2 className="ft-bold theme-cl">Businesses</h2>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
  {BusinessData.map((data, index) => (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-6" key={index}>
      <div className="Goodup-grid-wrap">
        <div className="Goodup-grid-upper">
          
          <div className="Goodup-grid-thumb">
            <a href="/business-detail" className="d-block text-center m-auto">
              <img src={data.image} className="img-fluid" alt="" />
            </a>
          </div>
        </div>
        <div className="Goodup-grid-fl-wrap">
          <div className="Goodup-caption px-2 py-2">
            <div className="Goodup-author">
              <a href="/business-detail">
                <img src={data.logo} className="img-fluid circle" alt="" />
              </a>
            </div>
            <div className="Goodup-cates">
              <a href="/business-detail">{data.industry}</a>
            </div>
            <h4 className="mb-0 ft-medium medium">
              <a href="/business-detail" className="text-dark fs-md">{data.BusinessName}
              </a>
            </h4>
            <div className="Goodup-middle-caption mt-3">
              <div className="Goodup-location">
                <i className="fas fa-map-marker-alt"></i>{data.BusinessAddress}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
))}

  </div>
</div>
</section>
</>
);
}

export default BusinessesListing;