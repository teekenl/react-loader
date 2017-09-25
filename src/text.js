import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loader from './react-loader';


class TestLoader extends Component {
  render(){
    return(
      <div>
        <Loader />
      </div>
    )
  }
}

ReactDOM.render(<TestLoader/>, document.getElementById('app'));
