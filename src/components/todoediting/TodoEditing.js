import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleEditing } from '../../action/index'
import Appbar from '../appbar/appbar'
import './TodoEditing.scss'

class TodoEditing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let selected = this.props.selected
    return (
      <div>
        {!!this.props.editing && (
          <div className="todoEditing">
            <Appbar
              title={'New Tasks'}
              left="check"
              leftfuc={this.props.toggleEditing}
            />
            <div className="todo-editing-head">
              <p>What tasks are you planning to perform?</p>
            </div>
            <div className="todo-editing-body">
              <textarea
                rows="3"
                placeholder="Editing"
              ></textarea>
              <p className="todo-editing-meta">
                <i className={`fas fa-${selected.todo.icon}`}></i>
                <span>New tasks of {selected.todo.name}</span>
              </p>
              <p className="todo-editing-meta">
                <i className="fa fa-calendar"></i>
                <span>Today</span>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editing: state.editing,
    selected: state.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleEditing }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoEditing);