import React, { Component } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Loader extends Component {
  constructor(props) {
    super(props);
  }

  // propTypes initialization.
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    active: PropTypes.bool,
    color: PropTypes.string
  };

  // default value
  static defaultProps = {
    type: 'ball-pulse',
    size: 'md',  // sm 'Small', md 'Medium', 'lg' 'Large'
    active: true
  };

  renderDiv(n) {
    const styles = this.props.styles || {};
    if (this.props.color) {
      styles.backgroundColor = this.props.color;
    }
    return (<div
      key={n}
      style={styles}
    />);
  }

  render() {
    const renderDivLoader = computeRange(3);
    const classes = classnames({
      loader: true,
      ['loader-' + this.props.size]: this.props.size !== 'md',
      'loader-active': this.props.active,
      'loader-hidden': !this.props.active
    }, this.props.className);

    return (<div className={classes}>
      <div className={`loader-inner ${this.props.type}`}>
        {renderDivLoader.map(::this.renderDiv)}
      </div>
    </div>);
  }
}

// initialize the loading type along with their index.
// different loading type animation

function computeRange(i,n){
  let index = -1, arr=[];
  for (;index<n;index++) {
    arr.push(i);
  }
  return arr;
}

export default Loader;

