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
      <div className="page-header">
        <div className="main-header main-content-wrap js-main-header webview-hidden">
          <div className="main-header_logo nav-item" id="logo" data-analytics-label="logo">
            <a href="/">Yelp</a>
          </div>

          <div className="nav-item">
            <label className="main-search_pseudo-input pseudo-input" for="find_desc">
              <span className="pseudo-input_text">Find</span>
              <span className="pseudo-input_field-holder" data-component-bound="true" >
                <input maxlength="64" data-component-bound="true" name="find_desc" value="" />
              </span>
            </label>
          </div>

          <div className="nav-item">
            <label className="main-search_pseudo-input pseudo-input">
              <span className="pseudo-input_text">Near</span>
              <span className="main-search_field-holder pseudo-input_field-holder">
                <input name="ns" value="1" />
              </span>
            </label>
          </div>

          <div className="nav-item">
            <button className="ybtn ybtn--primary main-search_submit main-header_button" id="header-search-submit" title="Search" type="submit" value="submit">
              <span className="u-offscreen">Search</span>
            </button>
          </div>

          <div className="nav-item">
          <svg id="24x24_speech" height="100%" viewBox="0 0 24 24" width="100%"><path d="M18 3H6C4.34 3 3 4.34 3 6v7c0 1.66 1.34 3 3 3h2v5l5-5h5c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3z"></path></svg>
          
            
          </div>
          <div className="nav-item">
          <svg id="24x24_notification" height="100%" viewBox="0 0 24 24" width="100%"><path d="M20.984 17.177A1 1 0 0 1 20 18H4a1 1 0 0 1-.348-1.938c2.43-.9 3.74-4.605 3.74-7.634 0-1.75 1.07-3.253 2.608-3.97V4a2 2 0 0 1 4 0v.457c1.538.718 2.61 2.22 2.61 3.97 0 3.03 1.31 6.734 3.738 7.635a1 1 0 0 1 .636 1.115zM12 22a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z"></path></svg>
          </div>
          <div className="nav-item">
            <a className="ybtn ybtn--primary drop-menu-link user-account_button" href="javascript:;" id="topbar-account-link" data-component-bound="true" aria-expanded="false">
              <span className="user-account_avatar responsive-visible-large-block">
                <img alt="username" className="photo-box-img" height="90" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" width="90" />
              </span>
            </a>
          </div>



        </div >
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('hinav'));