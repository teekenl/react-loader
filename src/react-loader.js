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
        const classes = classnames({
            loader: true,
            ['loader-' + this.props.size]: this.props.size !== 'md',
            'loader-active': this.props.active,
            'loader-hidden': !this.props.active
        },this.props.className);

        return <div className={classes}>
                <div className={`loader-inner ${this.props.type}`}>

                </div>
            </div>
    }

}

export default Loader;

