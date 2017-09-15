import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import myStyle from 'style.css';

class Loader extends Component {
    render(){
        return(
            <div className="loader_wrapper">
                <div className="loader_">s</div>
            </div>
        )
    }
}

//export default Loader;
ReactDOM.render(<Loader />, document.getElementById('app'));