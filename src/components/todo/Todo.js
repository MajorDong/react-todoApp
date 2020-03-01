import React from 'react';
import { useMemo } from 'react'
import PropTypes from 'prop-types'
import Task from '../task/Task'
import './Todo.scss'


const Todo = (props) => {
  console.log(props)
  let { todo, theSelected } = props
  const progressColor = useMemo(() => {
    const colorLeft = `color-stop(30%, ${todo.colors[0]})`
    const colorRight = `to(${todo.colors[1]})`
    return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
  },
    [todo]
  )

  const todayTasks = useMemo(() => {
    const todoCount = todo.tasks.filter(task =>
      !task.done && !task.deleted)
    return todoCount
  },
    [todo]
  )

  const doneTasks = useMemo(() => {
    const doneCount = todo.tasks.filter(task =>
      task.done && !task.deleted)
    return doneCount
  },
    [todo]
  )

  const progress = useMemo(() => {
    let allCount = todo.tasks.filter(task => !task.deleted).length
    let doneCount = todo.tasks.filter(task => !task.deleted && task.done).length
    let numStr = Math.round(doneCount / allCount * 100) + '%'
    return numStr
  },
    [todo]
  )

  const handleOnClick = (e) => {
    e.stopPropagation()
    props.selectfuc({ todo })
  }

  return (
    <div className="todo">
      {!theSelected && (
        <div
          className='todo-head'
          onClick={handleOnClick}>
          <div className="todo-icon" style={{ color: todo.colors[0] }}>
            <i className={`fa fa-${todo.icon}`}></i>
          </div>
          <div className="todo-menu">
            <i className="fa fa-ellipsis-v"></i>
          </div>
        </div>
      )}
      <div className="todo-body">
        <p className="todo-tips">{todo.tasks.length} Tasks</p>
        <h3 className="todo-title">{todo.name}</h3>
        <div className="todo-progress">
          <span className="todo-progress-line">
            <i style={{
              width: progress,
              backgroundImage: progressColor
            }}></i>
          </span>
          <span className="todo-progress-num">{progress}</span>
        </div>
        <div className="todo-tasks">
          {todayTasks.length > 0 && (
            <div className="todo-tasks-today">
              <h4>Today</h4>
              <ul>
                {todayTasks.map(item => (
                  <li key={item.id}>
                    <Task task={item}></Task>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {doneTasks.length > 0 && (
            <div className="todo-tasks-done">
              <h4>Done</h4>
              <ul>
                {doneTasks.map(item => (
                  <li key={item.id}>
                    <Task task={item}></Task>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  theSelected: PropTypes.bool.isRequired,
  selectfun: PropTypes.func
}


export default Todo