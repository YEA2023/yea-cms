import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import '../../assets/css/styles.css'

import HeaderTransparent from '../pages/HeaderTransparent';
import Footer from '../pages/Footer';
import Profile from '../pages/user/Profile';
import Businesses from '../pages/user/Businesses';
import BusinessAdd from '../pages/user/BusinessAdd'
import ChangePassword from '../pages/user/ChangePassword'

const UserLayout = () => {

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
           <Route path="/" element={<Profile />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/businesses" element={<Businesses />} />
           <Route path="/business-add" element={<BusinessAdd />} />
           <Route path="/change-password" element={<ChangePassword />} />
         
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

export default UserLayout
