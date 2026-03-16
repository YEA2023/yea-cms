const NewsEventsData = [
    {
        id: 1,
        title: 'YEA Hyderabad Unveils New Logo and Sets Up Rs 5-Cr Startup Fund',
        image: '/assets/images/YEA-Web-1-760x570.jpg',
        description: 'YEA, which has added 15 members this year, plans to take the total membership count 120 entrepreneurs and industry leaders',
		    date: '10 July 2021',
        article_type: 'News'       
    },
    {
        id: 2,
        title: 'YEA Hyderabad Unveils New Logo and Sets Up Rs 5-Cr Startup Fund',
        image: '/assets/images/YEA-Web-1-760x570.jpg',
        description: '10-year-old Young Entrepreneurs Association (YEA) of Hyderabad, on Friday evening unveiled its striking new logo.',
        date: '10 July 2021',
        article_type: 'Events'       
    },
    {
        id: 3,
        title: 'YEA Hyderabad Unveils New Logo, Launches ₹5Cr Startup Fund, Forge Strategic Partnerships',
        image: '/assets/images/YEA-Web-1-760x570.jpg',
        description: 'Initially, the association had merely 11 members, which has grown to 80 members today.',
		    date: '10 July 2021',
        article_type: 'News'
           
    },
    

]

function NewsListing()
{
return (
<>
<section className="ptb-60 gray">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div className="sec_title position-relative text-center mb-5">
        <h6 className="theme-cl mb-0">Latest Updates</h6>
        <h2 className="ft-bold">News & Events</h2>
      </div>
    </div>
  </div>
  <div className="row justify-content-center"> 
  {NewsEventsData.map((data, index) => ( 
     <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex"  key={index}>
      <div className="gup_blg_grid_box">
        <div className="gup_blg_grid_thumb">
          <a href="#">
            <img src={data.image} className="img-fluid" alt="" />
          </a>
        </div>
        <div className="gup_blg_grid_caption">
        <div className="blg_tag"><span>{data.article_type}</span></div>
          <div className="blg_title">
            <h4>
              <a href="#">{data.title}</a>
            </h4>
          </div>
          <div className="blg_desc">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="crs_grid_foot">
          <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
            
            <div className="crs_fl_last">
              <div className="foot_list_info">
                <ul>
                  
                  <li>
                    <div className="elsio_ic">
                      <i className="fa fa-clock text-warning" />
                    </div>
                    <div className="elsio_tx">{data.date}</div>
                  </li>
                </ul>
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

export default NewsListing;