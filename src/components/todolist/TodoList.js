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
    this.TodoListRef = React.createRef(null)
  }
  render() {
    return (
      <div
        className={this.props.selected ? 'todoList todoList-selected' : 'todoList'}
        ref={this.TodoListRef}
      >
        <ul
          style={{ width: `${this.props.todos.length * 100}%` }}
        >{
            this.props.todos.map((todo) => (
              <li
                key={todo.name}
                style={{ transform: `translateX(-${this.props.currentIndex * 100}%)` }}
              >
              
              <Todo
                  todo={todo}
                  selectfuc={this.props.selectTodo}
                  theSelected={!!this.props.selected && todo === this.props.selected.todo}
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
  componentDidMount(){
    const TodoListEL = this.TodoListRef && this.TodoListRef.current
    let touch = {}
    TodoListEL.addEventListener('touchstart', evt => {
      touch.startX = evt.touches[0].clientX
      touch.endX = 0
    })
    TodoListEL.addEventListener('touchmove', evt => {
      touch.endX = evt.touches[0].clientX
    })
    TodoListEL.addEventListener('touchend', () => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
        return
      }
      if (touch.endX < touch.startX) {
        this.props.nextTodo()
      } else {
        this.props.prevTodo()
      }
    })
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    currentIndex: state.currentIndex,
    selected: state.selected
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectTodo, nextTodo, prevTodo },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);