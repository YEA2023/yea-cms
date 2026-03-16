import React from 'react';
import {Link} from "react-router-dom";

function HeaderTransparent(props)
{
return (
<>
<div className="header header-transparent change-logo">
    <div className="container">
      <nav id="navigation" className="navigation navigation-landscape row d-flex">
        <div className="nav-header my-auto col-md-2">
          <a className="nav-brand" href="/">
            <img src="/assets/images/yea-logo.png" className="logo" alt="" />
          </a>
          <div className="nav-toggle"></div>
          <div className="mobile_nav">
            <ul>
              <li>
                <a href="/signin" className="theme-cl fs-lg">
                  <i className="lni lni-user"></i>
                </a>
              </li>
              <li>
                <a href="/dashboard-add-listings" className="crs_yuo12 w-auto text-white theme-bg">
                  <span className="embos_45">
                    <i className="fas fa-plus me-2"></i>Add Business </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-menus-wrapper my-auto col-md-10" >
          <ul className="nav-menu">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/businesses">Businesses</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/news-updates">News & Updates</a></li>
            <li><a href="/contact-us">Contact Us</a></li>

          </ul>
          <ul className="nav-menu nav-menu-social align-to-right">           
            <li className="add-listing">
              <Link to="/signin"><i className="fas fa-plus me-2"></i> Sign in</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

   </>
);
}

export default HeaderTransparent;