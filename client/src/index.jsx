import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

import style from '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <section>
        <div className="page-header">
          <div className="main-header main-content-wrap js-main-header webview-hidden">
            <div className="main-header_logo nav-item" id="logo" data-analytics-label="logo">
              <a href="/">Yelp</a>
            </div>

            <div className="nav-item">
              <div className="arrange_unit">
                <label className="main-search_pseudo-input pseudo-input" for="find_desc">
                  <span className="pseudo-input_text pseudo-input_text_find">Find</span>
                  <span className="pseudo-input_field-holder" data-component-bound="true" >
                    <input maxlength="64" data-component-bound="true" name="find_desc" value="" />
                  </span>
                </label>

                <label className="main-search_pseudo-input pseudo-input">
                  <span className="pseudo-input_text">Near</span>
                  <span className="main-search_field-holder pseudo-input_field-holder">
                    <input name="ns" placeholder="San Francisco, CA" />
                  </span>
                </label>
              </div>
            </div>

            <div className="nav-item">
              <button className="ybtn ybtn--primary main-search_submit main-header_button" id="header-search-submit" title="Search" type="submit" value="submit">
                <svg className="svg-24" height="100%" viewBox="0 0 24 24" width="100%"><path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z"></path></svg>
              </button>
            </div>

            <div className="nav-item">
              <span className="svg-24">
                <svg className="svg-24" height="100%" viewBox="0 0 24 24" width="100%"><path d="M18 3H6C4.34 3 3 4.34 3 6v7c0 1.66 1.34 3 3 3h2v5l5-5h5c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3z"></path></svg>
              </span>

            </div>
            <div className="nav-item">
              <span className="svg-24">
                <svg className="svg-24" height="100%" viewBox="0 0 24 24" width="100%"><path d="M20.984 17.177A1 1 0 0 1 20 18H4a1 1 0 0 1-.348-1.938c2.43-.9 3.74-4.605 3.74-7.634 0-1.75 1.07-3.253 2.608-3.97V4a2 2 0 0 1 4 0v.457c1.538.718 2.61 2.22 2.61 3.97 0 3.03 1.31 6.734 3.738 7.635a1 1 0 0 1 .636 1.115zM12 22a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z"></path></svg>
              </span>
            </div>
            <div className="nav-item">
              <a className="ybtn ybtn--primary drop-menu-link user-account_button" href="javascript:;" id="topbar-account-link" data-component-bound="true" aria-expanded="false">
                <span className="user-account_avatar responsive-visible-large-block">
                  <img alt="username" className="photo-box-img" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" />
                </span>
              </a>
            </div>
          </div >
        </div >

        <div className="dropdown-bar">
          <div className="dropdown-container">
            <div className="dropdown-item">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z"></path>
                </svg>
              </span>
              Restaurants
            <span className="nav-triangle-stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M18.364 9.525L16.95 8.11 12 13.06 7.05 8.11 5.636 9.526 12 15.89l6.364-6.365z"></path>
                </svg>
              </span>
            </div>
            <div className="dropdown-item">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M22.5 21H17v-6.8a.2.2 0 0 0-.2-.2h-4.6a.2.2 0 0 0-.2.2V21H3.5a.5.5 0 0 1-.5-.5v-8.15a.5.5 0 0 1 .33-.47l7.34-2.67a.5.5 0 0 0 .33-.47V4.486a.3.3 0 0 1 .434-.268l11.29 5.645a.5.5 0 0 1 .276.447V20.5a.5.5 0 0 1-.5.5zM10 14.2a.2.2 0 0 0-.2-.2H5.2a.2.2 0 0 0-.2.2v3.6c0 .11.09.2.2.2h4.6a.2.2 0 0 0 .2-.2v-3.6zm6-10.7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3.906L16 5V3.5zM1.273 11.424A.2.2 0 0 1 1 11.238v-1.57a.2.2 0 0 1 .127-.187l8.6-3.37a.2.2 0 0 1 .273.186v1.57a.2.2 0 0 1-.127.187l-8.6 3.375z">
                  </path>
                </svg>
              </span>
              Home Services
            <span className="nav-triangle-stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M18.364 9.525L16.95 8.11 12 13.06 7.05 8.11 5.636 9.526 12 15.89l6.364-6.365z">
                  </path>
                </svg>
              </span>
            </div>
            <div className="dropdown-item">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M22 10.22V9.5a.5.5 0 0 0-.5-.5H19l-1.176-3.528C17.53 4.586 16.784 4 15.954 4h-7.91c-.83 0-1.573.586-1.868 1.472L5 9H2.5a.5.5 0 0 0-.5.5v.72a1 1 0 0 0 .757.97l.743.185-.3.225A3.002 3.002 0 0 0 2 14v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5c0-.944-.445-1.833-1.2-2.4l-.3-.225.743-.186a1 1 0 0 0 .757-.97zM8.045 6h7.91l1.143 4H6.902l1.143-4zm-.958 9H5.182a1.182 1.182 0 0 1 0-2.363c.48 0 1.492.82 2.242 1.493a.5.5 0 0 1-.337.87zm11.73 0h-1.904a.5.5 0 0 1-.337-.87c.75-.674 1.76-1.493 2.242-1.493a1.182 1.182 0 0 1 0 2.363z"></path></svg>
              </span>
              Auto Services
            <span className="nav-triangle-stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M18.364 9.525L16.95 8.11 12 13.06 7.05 8.11 5.636 9.526 12 15.89l6.364-6.365z"></path>
                </svg>
              </span>
            </div>
            <div className="dropdown-item">
              More
            <span className="nav-triangle-stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M18.364 9.525L16.95 8.11 12 13.06 7.05 8.11 5.636 9.526 12 15.89l6.364-6.365z"></path>
                </svg>
              </span>
            </div>
            <div className="dropdown-item">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                  <path d="M20.546 4.868l-1.414-1.414a1.994 1.994 0 0 0-1.415-.586c-.51 0-1.023.195-1.414.586L4.99 14.768l-2.122 6.364 6.364-2.122L20.546 7.697a2 2 0 0 0 0-2.83zM8.152 17.262l-2.12.707.706-2.123 8.858-8.86 1.414 1.416-8.858 8.858z"></path>
                </svg>
              </span>
              Write a Review
          </div>
            <div className="dropdown-item">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg">
                  <path d="M19.125 13.375a2.874 2.874 0 0 1-2.375-1.257 2.874 2.874 0 0 1-4.75 0 2.873 2.873 0 0 1-4.75 0A2.873 2.873 0 0 1 2 10.5c0-.054.01-.107.026-.158l2-6A.5.5 0 0 1 4.5 4h15c.215 0 .406.138.475.342l2 6c.016.05.025.104.025.158a2.88 2.88 0 0 1-2.875 2.875zm-9.5 1A3.86 3.86 0 0 0 12 13.56a3.86 3.86 0 0 0 2.375.815 3.86 3.86 0 0 0 2.375-.815 3.853 3.853 0 0 0 2.25.804V20h-5v-4h-4v4H5v-5.636a3.853 3.853 0 0 0 2.25-.804 3.86 3.86 0 0 0 2.375.815z"></path>
                </svg>
              </span>
              For Businesses
          </div>
          </div>
        </div>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('hinav'));