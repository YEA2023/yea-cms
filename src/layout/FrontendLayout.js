import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import '../../assets/css/styles.css'

import HeaderTransparent from '../pages/HeaderTransparent';
import Footer from '../pages/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Businesses from '../pages/Businesses'
import Members from '../pages/Members'
import Events from '../pages/Events'
import News from '../pages/News';
import ContactUs from '../pages/ContactUs';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const FrontendLayout = () => {

    useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/jquery.min.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/popper.min.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/slick.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/jquery.magnific-popup.min.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/dropzone.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/counterup.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/lightbox.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/moment.min.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/daterangepicker.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);



  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/lightbox.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/jQuery.style.switcher.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/custom.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div>
       
    <div className="App">
      <div id="main-wrapper">
      
      <HeaderTransparent />
       <Routes>
         <Route >
           <Route path="/" element={<Home />} />
           <Route path="/about-us" element={<AboutUs />} />
           <Route path="/businesses" element={<Businesses />} />
           <Route path="/members" element={<Members />} />
           <Route path="/events" element={<Events />} />
           <Route path="/news-updates" element={<News />} />
           <Route path="/contact-us" element={<ContactUs />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/signup" element={<SignUp />} />
           
         </Route>
       </Routes>
       <Footer />
      
      <a id="tops-button" className="top-scroll" title="Back to top" href="#">
        <i className="ti-arrow-up"></i>
      </a>
      

      </div>
    </div>

    </div>
  )
}

export default FrontendLayout
