import React, { Component } from 'react';

import BusinessesListing from './BusinessesListing';
import NewsListing from './NewsListing';
import MembersListing from './MembersListing';


const HighlightsData = [
    {
        id: 1,
        image: '/assets/images/drum-circle-1-561x456.jpg',
        slug: 'subhakar-alapati',
        title: 'Drum Circle',       
    },
	{
    id: 2,
        image: '/assets/images/YEA-Pods-561x456.jpg',
        slug: 'subhakar-alapati',
        title: 'YEA Pod',       
    },
	{
    id: 3,
        image: '/assets/images/Startup-Pitch-561x456.jpg',
        slug: 'subhakar-alapati',
        title: 'Startup Pitch Event',       
    },
	{
    id: 4,
        image: '/assets/images/Phanindra-Sama-561x456.jpg',
        slug: 'subhakar-alapati',
        title: 'Unveiling Life Journeys by Phanindra Sama',       
    },
	{
    id: 5,
        image: '/assets/images/T-works-561x456.jpg',
        slug: 'subhakar-alapati',
        title: 'T Works – Workshop',       
    },
	{
    id: 6,
        image: '/assets/images/Italy-img-02-561x456.jpg',
        slug: 'subhakar-alapati',
        title: 'Italy Tour Cheese Factory, Pagani Automobili, Ferra ...',       
    },
	
]



function Home()
{
return (
<>

  <div className="clearfix"></div>


  <section id="carouselExampleCaptions" className="carousel slide p-0" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/assets/images/slider-img-yea-011.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h4 className="theme-color">Bringing your </h4>
          <h2 className="text-white mb-3 text-capitalize font-5rem">Innovative ideas to tangible reality.</h2>
          <a href="#" className="btn bg-theme text-light rounded mx-2">Read More <i className="lni lni-arrow-right "></i>
          </a>
          <a href="#" className="btn bg-white text-black  rounded mx-2">
            <i className="lni lni-user "></i> Join Us </a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/images/slider-img-yea-02.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h4 className="theme-color">A dynamic collective of driven</h4>
          <h2 className="text-white mb-3 text-capitalize font-5rem">Like-minded business enthusiasts</h2>
          <a href="#" className="btn bg-theme text-light rounded mx-2">Read More <i className="lni lni-arrow-right "></i>
          </a>
          <a href="#" className="btn bg-white text-black rounded mx-2">
            <i className="lni lni-user "></i> Join Us </a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/images/slider-img-yea-03.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h4 className="theme-color">Founded with the vision of empowering </h4>
          <h2 className="text-white mb-3 text-capitalize font-5rem">the next generation of business leaders</h2>
          <a href="#" className="btn bg-theme text-light rounded mx-2">Read More <i className="lni lni-arrow-right "></i>
          </a>
          <a href="#" className="btn bg-white text-black rounded mx-2">
            <i className="lni lni-user "></i> Join Us </a>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </section>
  <section className="p-0 mt-md-n2">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex">
          <div className="wrk-pro-box first bg-dark rounded-4 ">
            <div className="wrk-pro-box-icon mb-3">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 144c39.68 0 71.96 32.3 71.96 72S359.5 288 319.9 288S247.9 255.7 247.9 216S280.2 144 319.9 144zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM160.2 480c3.021-53.41 51.19-96 109.1-96H369.9c58.78 0 106.9 42.59 109.1 96H160.2zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 32c26.47 0 48 21.53 48 48S538.5 128 512 128s-48-21.53-48-48S485.5 32 512 32zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM128 32c26.47 0 48 21.53 48 48S154.5 128 128 128S80 106.5 80 80S101.5 32 128 32zM561.1 192H496c-11.16 0-22.08 2.5-32.47 7.438c-7.984 3.797-11.39 13.34-7.594 21.31s13.38 11.39 21.31 7.594C483.3 225.5 489.6 224 496 224h65.08C586.1 224 608 246.7 608 274.7V288c0 8.844 7.156 16 16 16S640 296.8 640 288V274.7C640 229.1 604.6 192 561.1 192zM162.8 228.3c7.938 3.797 17.53 .375 21.31-7.594c3.797-7.969 .3906-17.52-7.594-21.31C166.1 194.5 155.2 192 144 192H78.92C35.41 192 0 229.1 0 274.7V288c0 8.844 7.156 16 16 16S32 296.8 32 288V274.7C32 246.7 53.05 224 78.92 224H144C150.4 224 156.7 225.5 162.8 228.3z"></path></svg>
            </div>
            <div className="wrk-pro-box-caption">
              <h4 className="theme-color-2">Meet</h4>
              <p className="text-white">Networking is the cornerstone of professional growth. YEA emphasizes the significance of cultivating meaningful connections within the entrepreneurial ecosystem. Our platform facilitates encounters with like-minded innovators, fostering collaborations and the exchange of ideas that can redefine your business trajectory.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex">
          <div className="wrk-pro-box sec bg-dark rounded-4">
            <div className="wrk-pro-box-icon mb-3">
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 240c-28.28 0-64 21.84-64 64c0 35.25 28.75 64 64 64s64-28.75 64-64C128 262.1 92.68 240 64 240zM64 336c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S81.63 336 64 336zM184 288H167.1C159.2 288 152 295.2 152 303.1S159.2 320 167.1 320h16.05C192.8 320 200 312.8 200 304S192.8 288 184 288zM576 192c28.28 0 64-21.84 64-64c0-42.01-35.62-64-64-64c-28.28 0-64 21.84-64 64C512 163.3 540.8 192 576 192zM576 96c17.62 0 32 14.38 32 32s-14.38 32-32 32s-32-14.38-32-32S558.4 96 576 96zM576 384c-13.25 0-25.62 4-35.75 10.88c-3.375 2.25-6.375 4.75-9.125 7.5l-91.88-55.13C444.9 334 448 319.3 448 304C448 242.1 397.9 192 336 192c-11.25 0-21.88 2.25-32.25 5.25L264.5 113.1C278.8 101.4 288 83.88 288 64c0-41.93-35.32-64-64-64C182.1 0 160 35.31 160 64c0 35.25 28.75 64 64 64c4 0 7.875-.5 11.75-1.25l39 83.63C244.3 230.4 224 264.8 224 304c0 61.88 50.13 112 112 112c35 0 65.75-16.38 86.38-41.5l92.38 55.38C513.1 435.8 512 441.8 512 448c0 35.25 28.62 64 64 64C618.2 512 640 476.4 640 448C640 420.5 618.4 384 576 384zM224 96C206.4 96 192 81.63 192 64s14.38-32 32-32s32 14.38 32 32S241.6 96 224 96zM336 384C291.9 384 256 348.1 256 304S291.9 224 336 224S416 259.9 416 304S380.1 384 336 384zM576 480c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S593.6 480 576 480zM478.4 229.2l22.44-16.83c7.074-5.307 8.492-15.35 3.166-22.41c-5.305-7.025-15.29-8.436-22.34-3.154l-22.44 16.83c-7.074 5.305-8.492 15.35-3.166 22.4C461.3 233.1 471.3 234.5 478.4 229.2z"></path></svg>
            </div>
            <div className="wrk-pro-box-caption">
              <h4 className="theme-color-2">Connect</h4>
              <p className="text-white">In today's dynamic business landscape, effective networking is paramount. YEA is dedicated to assisting you build and nurture valuable associations with industry leaders, peers, and strategic partners. We present curated opportunities for you to establish connections that can open doors to new ventures, investment, and knowledge-sharing.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex">
          <div className="wrk-pro-box thrd bg-dark rounded-4 ">
            <div className="wrk-pro-box-icon mb-3">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M119.1 33.74l-64-31.1c-7.875-3.1-17.5-.875-21.38 7.125c-4 7.875-.875 17.5 7.125 21.37l64 31.1C107.1 63.36 109.5 63.99 112 63.99c7.375 0 13.88-5.125 15.62-12.37C129.3 44.49 125.8 36.99 119.1 33.74zM112 287.1c-2.5 0-4.875 .625-7.125 1.75l-64 31.1c-8 3.875-11.12 13.5-7.25 21.37c4 7.1 13.62 11.12 21.5 7.25l64-31.1c6.625-3.375 10.12-10.87 8.5-17.1C125.9 293.1 119.4 287.1 112 287.1zM528 63.99c2.5 0 4.875-.625 7.125-1.75l64-31.1c8-3.875 11.12-13.5 7.125-21.37c-3.875-7.1-13.5-11.12-21.38-7.125l-64 31.1c-6.625 3.25-10.12 10.75-8.5 17.87C514.1 58.86 520.6 63.99 528 63.99zM96 175.1C96 167.1 88.88 159.1 80 159.1h-64c-8.875 0-16 7.125-16 15.1S7.125 191.1 16 191.1h64C88.88 191.1 96 184.9 96 175.1zM624 159.1h-64c-8.875 0-16 7.125-16 15.1s7.125 15.1 16 15.1h64c8.875 0 16-7.125 16-15.1S632.9 159.1 624 159.1zM599.1 321.7l-64-31.1c-7.875-3.1-17.5-.75-21.5 7.125c-3.875 7.875-.75 17.5 7.25 21.5l64 31.1c7.875 3.875 17.5 .75 21.5-7.25C610.3 335.2 607.1 325.6 599.1 321.7zM319.5 .0154C222.7 .2967 144 79.89 144 177.4c0 42.91 15.47 84.34 43.55 116.6c13.33 15.31 35.84 49.59 43.73 76.02c1.078 8.687 8.844 14.62 17.64 13.71c8.703-.9687 14.98-8.965 14.11-17.65l-.6094-3.312c-10.31-34.97-36-72.84-50.73-89.77C188.7 246.5 176 212.6 176 177.4c0-81.24 63.05-145.1 143.5-145.3H320c38.13 0 74.05 14.87 101.2 41.94C448.8 101.5 464 138.2 464 177.4c0 35.19-12.67 69.15-35.67 95.62c-14.75 16.94-40.44 54.8-50.75 89.77l-.625 3.344c-1.047 8.75 4.938 17.59 13.67 18.68c.7813 .0938 1.531 .1562 2.281 .1562c7.797 0 14.36-5.121 15.36-13.12c8.344-28.25 30.86-62.53 44.2-77.84C480.5 261.7 496 220.3 496 177.4c0-47.71-18.55-92.49-52.22-126.1C410.5 18.08 365.6-1.172 319.5 .0154zM383.1 415.1H256c-8.846 0-16.01 7.18-16 16.03l.0746 22.34c.0098 6.27 1.884 12.46 5.359 17.68l17.09 25.69c5.225 7.855 17.22 14.28 26.65 14.28h61.72c9.418 0 21.41-6.43 26.63-14.27l17.09-25.69c2.953-4.441 5.351-12.36 5.359-17.68l-.0254-22.34C399.1 423.2 392.8 415.1 383.1 415.1zM367.9 454.4l-16.11 24.45c-.4766 .4375-1.686 1.086-.8672 1.117l-60.29 .1172c-.4238-.1016-1.138-.2773-1.423-.2773c-.1406 0-.1348-.2266 0 0l-17.1-25.48l-.0098-6.367h95.94l.0039 5.18C367.9 453.6 367.7 454.4 367.9 454.4C367.9 454.4 367.8 454.5 367.9 454.4zM336 80.02c0-8.84-7.156-16-16-16c-61.75 0-112 50.24-112 111.1c0 8.844 7.156 16 16 16s16-7.159 16-16c0-44.1 35.88-79.1 80-79.1C328.8 96.01 336 88.86 336 80.02z"></path></svg>
            </div>
            <div className="wrk-pro-box-caption">
              <h4 className="theme-color-2">Grow</h4>
              <p className="text-white">We understand that growth is a continuous journey. YEA is designed to provide you with the tools, resources, and guidance necessary for business expansion. Through expert-led seminars, funding opportunities, and market insights, we empower you to transform your entrepreneurial vision into a thriving enterprise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ptb-60">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div className="content_block_2 pr-3 py-4">
            <div className="content-box">
              <div className="sec-title light">
                <h2 className="ft-bold">Empowering the Entrepreneurs of Tomorrow</h2>
                <span className="animate-border mb-4"></span>
              </div>
              <div className="text mb-3">
                <p>Since its inception in 2012, the Young Entrepreneurs Association (YEA) has held the distinction of being Hyderabad’s pioneering business community for young entrepreneurs. What distinguishes YEA is its unique focus on individuals aged 21 to 45, establishing it as a one-of-a-kind entrepreneurial association. We bring together a distinguished community of ambitious, forward-thinking individuals. Our esteemed membership base encompasses a diverse array of dynamic entrepreneurs and seasoned executives who have achieved excellence across a multitude of sectors and industries.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 image-column">
          <div className="image-box">
            <figure className="image bx-shadow">
              <img src="/assets/images/yea-aboutus.jpg" className="img-fluid rounded" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-dark ptb-60">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="sec_title position-relative text-center mb-5">
            <h2 className="ft-bold text-white pb-3">Forging a Brighter Entrepreneurial Tomorrow</h2>
            <span className="animate-border mb-4 m-auto"></span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex">
          <div className="wrk-pro-box first rounded-4 bx-shadow">
            <div className="wrk-pro-box-icon">
              <i className="ti-map-alt theme-color fa-2x"></i>
            </div>
            <div className="wrk-pro-box-caption">
              <h4 className="theme-color-2">Vision</h4>
              <p className="text-white">Our objective is to establish a comprehensive nationwide communication and resource network for Young Entrepreneurs. We aim to empower our members by equipping them with essential tools and resources to strengthen and enhance their businesses.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex">
          <div className="wrk-pro-box sec bx-shadow rounded-4">
            <div className="wrk-pro-box-icon">
              <i className="ti-user theme-color fa-2x"></i>
            </div>
            <div className="wrk-pro-box-caption">
              <h4 className="theme-color-2">Mission</h4>
              <p className="text-white">We endeavor to cultivate and champion the authentic entrepreneurial spirit by fostering a collaborative environment where young and dynamic minds can come together to provide mutual support and growth opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ptb-60" style={{background:"url(/assets/images/light-bg.jpg) repeat"}}>
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-5 col-md-12 col-sm-12 image-column">
          <div className="image-box">
            <figure className="image bx-shadow">
              <img src="/assets/images/yea-image-estimed-members.jpg" className="img-fluid rounded" alt="" />
            </figure>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div className="content_block_2 pr-3 py-4">
            <div className="content-box">
              <div className="sec-title light">
                <h2 className="ft-bold">Our Esteemed Members</h2>
                <span className="animate-border mb-4"></span>
              </div>
              <div className="text mb-3">
                <p>YEA is an association of entrepreneurs who embody excellence in the business world. Each member boasts significant years of hands-on industry experience, showcasing a profound commitment to their craft. These individuals are resolutely focused, exceptionally driven, and deeply dedicated to the pursuit of entrepreneurial success. Becoming a part of YEA means joining this exclusive community of professionals who are unwavering in their commitment to excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  

 


  <section className="ptb-60">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="sec_title position-relative text-center mb-4">
            <h6 className="theme-cl mb-0">YEA's Annual Highlights</h6>
            <h2 className="ft-bold">A Journey Through Years of Success</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center slide_items"> {HighlightsData.map((data, index) => ( 
        <div className="single-list col-md-4" key={index}>
          <div className="gup_blg_grid_box"  >
            <div className="gup_blg_grid_thumb">
              <a href="#">
                <img src={data.image} className="img-fluid" alt={data.title} />
              </a>
            </div>
            <div className="gup_blg_grid_caption text-center">
              <div className="blg_title">
                <h4>
                  <a href="#">{data.title}</a>
                </h4>
              </div>
            </div>
          </div>
        </div> ))} </div>
    </div>
  </section>

<MembersListing />

<BusinessesListing />

<NewsListing />
 
		
 

    
   </>
);
}

export default Home;