import React from 'react';
import PropTypes from 'prop-types'



const Todo = (props) => {
  let { todo, selected } = props

  const progress = () => {
    let allCount = todo.tasks.filter( task => !task.deleted).length
    let doneCount = todo.tasks.filter( task => !task.deleted && task.done).length
    let numStr = Math.round(doneCount / allCount ) * 100 + '%'
    return numStr
  }

  const progressColor = ()=> {
    const colorLeft = `color-stop(30%, ${todo.colors[0]})`
    const colorRight = `to(${todo.colors[1]})`
    return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
  }

  return(
    <div className={selected ? 'todo todo-selected' : 'todo'}>
      <div className="todo-head">
        <div className="todo-icon" style={{color: todo.colors[0]}}>
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
              width: progress(),
              backgroundImage : progressColor()
            }}></i>
          </span>
          <span className="todo-progress-num">{progress()}</span>
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