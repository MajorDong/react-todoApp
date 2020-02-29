import React from 'react';
import { useMemo } from 'react'
import PropTypes from 'prop-types'
import Task from '../task/Task'
import { today, tomorrow } from '../../shared'
import './Todo.scss'


const Todo = (props) => {
  let { todo, selected } = props

  const progress = useMemo(() => {
    let allCount = todo.tasks.filter(task => !task.deleted).length
    let doneCount = todo.tasks.filter(task => !task.deleted && task.done).length
    let numStr = Math.round(doneCount / allCount) * 100 + '%'
    return numStr
  },
    [todo]
  )

  const progressColor = useMemo(() => {
    const colorLeft = `color-stop(30%, ${todo.colors[0]})`
    const colorRight = `to(${todo.colors[1]})`
    return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
  },
    [todo]
  )

  const todayTasks = useMemo(()=>{
    const todoCount = todo.tasks.filter( task => 
      task.date >= today && task.date < tomorrow)
    return todoCount
  },
    [todo]
  )

  const tomorrowTasks = useMemo(()=>{
    const tomorrowCount = todo.tasks.filter( task => 
      task.date > tomorrow)
    return tomorrowCount
  },
    [todo]
  )

  const outdateTasks = useMemo(()=>{
    const outdateCount = todo.tasks.filter( task => 
      task.date < today)
    return outdateCount
  },
    [todo]
  )

  return (
    <div className={selected ? 'todo todo-selected' : 'todo'}>
      <div className="todo-head">
        <div className="todo-icon" style={{ color: todo.colors[0] }}>
          <i className={`fa fa-${todo.icon}`}></i>
        </div>
        <div className="todo-menu">
          <i className="fa fa-ellipsis-v"></i>
        </div>
      </div>
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
          { todayTasks.length > 0 && (
            <div className="todo-tasks-today">
              <h4>Today</h4>
              <ul>
                {todayTasks.map( task => (
                  <li key={task.id}>
                    <Task></Task>
                  </li>
                ))}
              </ul>
            </div>
          )}
          { tomorrowTasks.length > 0 && (
            <div className="todo-tasks-today">
              <h4>Tomorrow</h4>
              <ul>
                {tomorrowTasks.map( task => (
                  <li key={task.id}>
                    <Task></Task>
                  </li>
                ))}
              </ul>
            </div>
          )}
          { outdateTasks.length > 0 && (
            <div className="todo-tasks-today">
              <h4>Outdate</h4>
              <ul>
                {outdateTasks.map( task => (
                  <li key={task.id}>
                    <Task></Task>
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

Todo.propType = {
  todo: PropTypes.object.isRequired,
  selected: PropTypes.bool
}


export default Todo