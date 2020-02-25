import React from 'react';
import Appbar from '../../components/appbar/appbar'
import './home.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="home">
        <Appbar
          title="TODO"
          left="bars"
          right="search"
        />
        home
      </div>
     );
  }
}
 
export default Home;