import React from 'react';
import PropTypes from 'prop-types'
import './appbar.scss'



class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="appBar">
        <span onClick={this.props.leftfuc}>
          <i className={`fa fa-${this.props.left}`}></i>
        </span>
        <h1>{this.props.title}</h1>
        <span>
          <i className={`fa fa-${this.props.right}`}></i>
        </span>
      </div>
     );
  }
}
AppBar.propTypes = {
  title: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  leftfuc: PropTypes.func
}
AppBar.defaultProps = {
  title: '',
  left: 'chevron-left',
  right: 'ellipsis-v'
}
 
export default AppBar;