function User_nav()
{
return (
<>

<a className="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
          <i className="fas fa-bars me-2" />Dashboard Navigation
        </a>
<div className="collapse" id="MobNav">
          <div className="goodup-dashboard-nav sticky-top">
            <div className="goodup-dashboard-inner">
              <ul data-submenu-title="Main Navigation">
                
                <li><a href="/user/businesses"><i className="lni lni-files me-2" />My Businesses</a></li>
                <li><a href="/user/business-add"><i className="lni lni-add-files me-2" />Add Business</a></li>
                
                
              </ul>
              <ul data-submenu-title="My Accounts">
                <li><a href="/user/profile"><i className="lni lni-user me-2" />My Profile </a></li>
                <li><a href="/user/change-password"><i className="lni lni-lock-alt me-2" />Change Password</a></li>
                <li><a href="javascript:void(0);"><i className="lni lni-trash-can me-2" />Delete Account</a></li>
                <li><a href="/signin"><i className="lni lni-power-switch me-2" />Log Out</a></li>
              </ul>
            </div>					
          </div>
        </div>
                        
    

   </>
);
}

export default User_nav;