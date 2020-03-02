import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Appbar from '../appbar/appbar'
import Todo from '../todo/Todo'
import { unselectTodo } from '../../action/index'
import './TodoDetail.scss'



class TodoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  
  render() {
    let selected = this.props.selected
    return (
      <div>
        {!!selected && (
            <div className="todo-detail">
              <Appbar leftfuc={this.props.unselectTodo} />
              <Todo 
                todo={this.props.todo}
                theSelected={true}
              ></Todo>
            </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let currentTodo
  state.todos.forEach((todo)=>{
    if(!!state.selected && todo.name === state.selected.todo.name){
      currentTodo = todo
    }
  })
  return {
    selected: state.selected,
    todo: currentTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ unselectTodo }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail);