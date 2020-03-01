import React from 'react';
import Appbar from '../../components/appbar/appbar'
import Appavatar from '../../components/avatar/appAvatar'
import Gradient from '../../components/gradient/Gradient'
import TodoList from '../../components/todolist/TodoList'
import TodoDetail from '../../components/tododetail/TodoDetail'
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
        <Appavatar />
        <Gradient />
        <TodoList />
        <TodoDetail />
        home
      </div>
     );
  }
}
 
export default Home;