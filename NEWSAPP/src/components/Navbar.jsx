import React from "react";
import "./navbar.css";

export const Navbar = ({ setCategory }) => {

  return (

    <>
      <div className="sidebar sidebar-narrow border-end h-100 fixed-left">
        <div className="sidebar-header border-bottom">
          <div className="sidebar-brand">CUI</div>
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item">
            <div className="nav-link" onClick={() => setCategory("business")}>
              business
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link"  >
              entertainment
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" >
              general
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              health science
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" setCategory="sports" >
              sports
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" >
              technology
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page" onClick={() => setCategory("buisness")}>
                business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page" onClick={() => setCategory("entertainment")} >
                entertainment
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page" onClick={() => setCategory("general")}>
                genral
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page" onClick={() => setCategory("health")}>
                health science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page" onClick={() => setCategory("sports")} >
                sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page" onClick={() => setCategory("technology")} >
                technology                </div>
            </li>

          </ul>
        </div> */}


    </>
  );
};
