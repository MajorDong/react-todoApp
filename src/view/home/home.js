import React from 'react';
import Appbar from '../../components/appbar/appbar'
import Appavatar from '../../components/avatar/appAvatar'
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
        <Appavatar></Appavatar>
        home
      </div>
     );
  }
}
 
export default Home;