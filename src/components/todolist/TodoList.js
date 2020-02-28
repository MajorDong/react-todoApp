import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTodo, nextTodo, prevTodo } from '../../action/index'
import Todo from '../todo/Todo'
import './TodoList.scss'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={this.props.selected ? 'todoList todoList-selected' : 'todoList'}>
        <ul
          style={{ width: `${this.props.todos.length * 100}%` }}
        >{
          this.props.todos.map(todo => (
            <li
              key={todo.name}
              style={{transform: `translateX(-${this.props.currentIndex * 100}%)`}}
            >
              <Todo 
                todo={todo}
                onClick={this.props.selectTodo}
                selected={this.props.selected && todo === this.props.selected.todo}
              />
            </li>
          ) )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    currentIndex: state.currentIndex,
    selected: state.selected
  }
}
const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    { selectTodo, nextTodo, prevTodo },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(TodoList);