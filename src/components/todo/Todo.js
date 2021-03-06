import React, { useMemo } from 'react';
import PropTypes from 'prop-types'
import Task from '../task/Task'
import './Todo.scss'


function Todo(props) {
  let { todo, theSelected } = props

  let progressColor = useMemo(() => {
    let colorLeft = `color-stop(30%, ${todo.colors[0]})`
    let colorRight = `to(${todo.colors[1]})`
    return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
  }, [todo])

  let todayTasks = useMemo(() => {
    const todoCount = todo.tasks.filter(task =>
      !task.done && !task.deleted)
    return todoCount
  }, [todo])

  let doneTasks = useMemo(() => {
    const doneCount = todo.tasks.filter(task =>
      task.done && !task.deleted)
    return doneCount
  }, [todo])

  let progress = useMemo(() => {
    let allCount = todo.tasks.filter(task => !task.deleted).length
    let doneCount = todo.tasks.filter(task => !task.deleted && task.done).length
    let num = Math.round(doneCount / allCount * 100)
    return num
  }, [todo])

  return (
    <div className="todo">
      {!theSelected && (
        <div
          className='todo-head'
          onClick={() => { props.selectfuc({ todo }) }}>
          <div className="todo-icon" style={{ color: todo.colors[0] }}>
            <i className={`fa fa-${todo.icon}`}></i>
          </div>
          <div className="todo-menu">
            <i className="fa fa-ellipsis-v"></i>
          </div>
        </div>
      )}

      <div className="todo-body">
        <div className="todo-tips">
          <div>{doneTasks.length + todayTasks.length} Tasks</div>
          <div>{doneTasks.length} Done</div>
        </div>
        <h3 className="todo-title">{todo.name}</h3>
        <div className="todo-progress">
          <span className="todo-progress-line">
            <i style={{
              width: progress + '%',
              backgroundImage: progressColor
            }}></i>
          </span>
          <span className="todo-progress-num">{!!progress ? progress + '%' : '0%'}</span>
        </div>

        {theSelected && (
          <div className="todo-tasks">
            {todayTasks.length > 0 && (
              <div className="todo-tasks-today">
                <h4>Today</h4>
                <ul>
                  {todayTasks.map((item, index) => (
                    <li key={item.id}>
                      <Task task={item} index={index}></Task>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {doneTasks.length > 0 && (
              <div className="todo-tasks-done">
                <h4>Done</h4>
                <ul>
                  {doneTasks.map((item, index) => (
                    <li key={item.id}>
                      <Task task={item} index={index}></Task>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}


Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  theSelected: PropTypes.bool,
  selectfun: PropTypes.func
}


export default Todo