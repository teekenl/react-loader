import React, {Component } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Loader extends Component {
    static propTypes ={
        type: PropTypes.string,
        size: PropTypes.string,
        active: PropTypes.bool,
        color: PropTypes.string
    };
    static defaultProps = {
        type: 'ball-pulse',
        size: 'md',  // sm 'Small', md 'Medium', 'lg' 'Large'
        active: true
    };

    renderDiv(n){
        const styles = this.props.styles || {};
        if(this.props.color){
            style.backgroundColor = this.props.color;
        }

        return <div key={n} style={styles} />
    }

    render(){
        const nDiv = [2,2];
        {nDiv.map(::this.render)}

        return <div>s</div>
    }

}

export default Loader;

