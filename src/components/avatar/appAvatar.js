import React from 'react';
import { connect } from 'react-redux'
import { Avatar } from 'antd'
import imgURL from '../../assets/face.jpeg'
import { tomorrow } from '../../shared'
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
    console.log(todayStr)
    return todayStr
  }
  render() {
    return (
      <div className="appAvatar" className={!!this.props.selected ? 'avatar__selected': ''} >
        <Avatar
          src={imgURL}
          size={80}
        ></Avatar>
        <h2>Hello, Tom</h2>
        <p className="avatar_tips">
          Looks like feed good.<br />
          You have {this.props.todayTasks.length}tasks to do today.
        </p>
        <p>{this.getToday()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const tasks = []
  state.todos.forEach(todo => {
    todo.tasks.forEach(task => {
      if (task.date <= tomorrow && !task.done && !task.deleted) {
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