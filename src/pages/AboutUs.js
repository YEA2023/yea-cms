import MembersListing from './MembersListing';
import Breadcrumb from './Breadcumb';


function AboutUs()
{
return (
<>
<Breadcrumb title="About Us" />
<section className="ptb-60">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div className="content_block_2 pr-3 py-4">
            <div className="content-box">
              <div className="sec-title light">
                <h2 className="ft-bold">A Decade Of Distinct Influence</h2>
                <span className="animate-border mb-4"></span>
				<h4>The Epitome of Business</h4>
              </div>
              <div className="text mb-3">
                <p>Celebrating a decade in Hyderabad, YEA emerges as an emblem of distinction in the entrepreneurial landscape. Our team epitomizes seasoned expertise, fresh perspectives, and an unwavering commitment to empowering emerging professionals, poised to reshape entrepreneurship.</p>

				<p>Since our establishment in 2012, YEA has maintained a formidable presence, led by a dynamic collective of forward-thinking visionaries at the forefront of Hyderabad’s esteemed business community. Today, our membership, aged 25 to 45, infuses our ranks with renewed vigor and resolute dedication. Our monthly gatherings unite around 70 entrepreneurs from diverse backgrounds, bound by a shared ethos of holistic, family-oriented business principles. Notably, our members represent generations from the 1st to the 4th, echoing a legacy and progress continuum within our vibrant community.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 image-column">
          <div className="image-box">
            <figure className="image bx-shadow">
              <img src="/assets/images/about-logo-new-imgyea.png" className="img-fluid rounded" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="space gray">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img src="/assets/images/Section-2-about-us-img-1.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">	
              <div className="m-spaced">
                
                <div className="uli-list-features">
                  <ul>
                    <li>
                      <div className="list-uiyt">
                        <div className="list-iobk"><i className="fas fa-share" /></div>
                        <div className="list-uiyt-capt">
                          <h5>Shared Commitment</h5>
                          <p>Our community is defined by a profound dedication, extending beyond individual enterprises to encompass the collective advancement of our entrepreneurial ecosystem. This shared commitment cultivates trust, collaboration, and mentorship among our esteemed members.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list-uiyt">
                        <div className="list-iobk"><i className="fas fa-users" /></div>
                        <div className="list-uiyt-capt">
                          <h5>Exchange of Ideas</h5>
                          <p>We believe in the power of diverse perspectives and encourage the free flow of innovative concepts. Through open dialogue, idea sharing, and intellectual collaboration, we continually bring fresh insights and solutions to the forefront.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list-uiyt">
                        <div className="list-iobk"><i className="fa fa-chart-bar" /></div>
                        <div className="list-uiyt-capt">
                          <h5>Collective Growth</h5>
                          <p>Central to our ideology is the concept of collective growth. When our members succeed, our entire community benefits. We actively seek opportunities for collaboration and synergy, aiming to elevate our entrepreneurial ecosystem.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





<section className="bg-dark ptb-60">
    <div className="container">
      <div className="row justify-content-center">
	
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex my-auto">
          <div className="wrk-pro-box first bg-dark">
            
            <div className="wrk-pro-box-caption">
              <h2 className="text-white">Hyderabad Bred Pioneers YEA's Entrepreneurial Impact</h2>
			  <span className="animate-border mb-4"></span>
              <p className="text-white fw-400">YEA’s establishment marked a significant stride for the city, setting the stage for unparalleled growth and innovation. As pioneers, we serve as both an inspiration and an opportunity for those who harbor entrepreneurial ambitions. Being rooted in Hyderabad provides us with invaluable insights into the city’s unique business landscape. Hyderabad has generously contributed to our growth, and it’s our responsibility to reciprocate by taking actions that raise the city’s prominence in the entrepreneurial world.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex my-auto">
		<img src="/assets/images/Section-3-about-us-img-1.jpg" className="img-fluid" alt="" />
        </div>

		
      </div>
    </div>
  </section>


  <section className="space">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">

			<div className="sec-title light text-center my-auto">
                <h2 className="ft-bold">YEA's Current Structure</h2>
                <span className="animate-border mb-4 m-auto"></span>
				<p>The current organizational framework of YEA is delineated through the lens of industries represented,
as outlined in the Members’ Booklet for the year 2022-2023.</p>
              </div>

              <div className="position-relative">
                <img src="/assets/images/chart.png" className="img-fluid" alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </section>


      <MembersListing />



			
    

   </>
);
}

export default AboutUs;