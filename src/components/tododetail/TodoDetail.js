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
              <Appbar lFuc={this.props.unselectTodo} />
              <Todo 
                todo={selected.todo}
                theSelected={!!selected}
              />
            </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ unselectTodo }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail);