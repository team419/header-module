import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import cssOverall from '../style/overall.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { restaurant } = this.state;
    if (restaurant) {
      console.log(restaurant);
      return (
        <div>
          hi
        </div>
      );
    }
    return '';
  }
}

ReactDOM.render(<App />, document.getElementById('hi'));