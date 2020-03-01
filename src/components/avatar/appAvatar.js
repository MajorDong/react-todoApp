import React from 'react';
import { connect } from 'react-redux'
import { Avatar } from 'antd'
import imgURL from '../../assets/face.jpeg'
import './appAvatar.scss'


class Appavatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date()
    }
  }
  getToday() {
    let todayStr = this.state.today.toDateString().toUpperCase()
    return todayStr
  }
  render() {
    return (
      <div className={!!this.props.selected ? 'appAvatar avatar-selected': 'appAvatar'} >
        <Avatar
          className="avatar-face"
          src={imgURL}
          size={80}
        ></Avatar>
        <h2 className="avatar-name">Hello, Tom</h2>
        <p className="avatar-tips">
          Looks like feed good.<br />
          You have {this.props.todayTasks.length} tasks to do today.
        </p>
        <p className="avatar-date">{this.getToday()}</p>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  const tasks = []
  state.todos.forEach(todo => {
    todo.tasks.forEach(task => {
      if (!task.done && !task.deleted) {
        tasks.push(task)
      }
    })
  })
  return {
    selected: state.selected,
    todayTasks: tasks
  }
}

export default connect(mapStateToProps)(Appavatar);