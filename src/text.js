import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loader from './react-loader';
import css from './loader.css';

class TestLoader extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Loader/>
      </div>
    )
  }
}

ReactDOM.render(<TestLoader/>, document.getElementById('app'));
