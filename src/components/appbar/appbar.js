import React from 'react';
import './appbar.scss'

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="appBar">
        <span>
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
 
export default AppBar;