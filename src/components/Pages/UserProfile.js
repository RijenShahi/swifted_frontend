import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";

const UserProfile = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4 profile-head">
              <img src={profile} alt="profile" />
              <h2>User Profile</h2>
              <h4>Customer</h4>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-account-tab"
                      data-toggle="pill"
                      href="#pills-account"
                      role="tab"
                      aria-controls="pills-account"
                      aria-selected="false"
                    >
                      Account Details
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-address-tab"
                      data-toggle="pill"
                      href="#pills-address"
                      role="tab"
                      aria-controls="pills-address"
                      aria-selected="false"
                    >
                      Address
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-wishlist-tab"
                      data-toggle="pill"
                      href="#pills-wislist"
                      role="tab"
                      aria-controls="pills-wishlist"
                      aria-selected="false"
                    >
                      Wishlist
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    Dashboard
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-account"
                    role="tabpanel"
                    aria-labelledby="pills-account-tab"
                  >
                    ...
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-address"
                    role="tabpanel"
                    aria-labelledby="pills-address-tab"
                  >
                    ...
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-wishlist"
                    role="tabpanel"
                    aria-labelledby="pills-wishlist-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <Link to="/editprofile" className="text-black-50">
                <Button variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Link>
              {/* <input type ="submit" className="profile-edit-btn" name="btnAddMore" values="Edit Profile"/> */}
              <Link to="/" className="text-black-50">
                <Button variant="contained" color="primary">
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
