import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTodo, nextTodo, prevTodo } from '../../action/index'
import Todo from '../todo/Todo'
import './TodoList.scss'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      using: false
    }
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
  componentDidMount() {
    const TodoListEL = this.TodoListRef && this.TodoListRef.current
    let touch = {

    }
    if (document.body.ontouchstart !== undefined) {
      TodoListEL.addEventListener('touchstart', e => {
        touch.startX = e.touches[0].clientX
        touch.endX = 0
      })
      TodoListEL.addEventListener('touchmove', e => {
        touch.endX = e.touches[0].clientX
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
    }else{
      TodoListEL.addEventListener('mousedown', e =>{
        this.setState({
          using: true
        })
        touch.startX = e.clientX
        touch.endX = 0
      })
      TodoListEL.addEventListener('mousemove', e =>{
        if(this.state.using){
          touch.endX = e.clientX
        }
      })
      TodoListEL.addEventListener('mousemove', () => {
        if(this.state.using){
          if(!touch.endX || Math.abs(touch.endX - touch.startX) < 10){
            return
          }
          if (touch.endX < touch.startX) {
            this.props.nextTodo()
          } else {
            this.props.prevTodo()
          }
        }
       
        this.setState({
          using: false
        })
      })
    }

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