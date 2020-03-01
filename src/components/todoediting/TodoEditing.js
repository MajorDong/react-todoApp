import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleEditing,handleTxtOnchange} from '../../action/index'
import Appbar from '../appbar/appbar'
import './TodoEditing.scss'

class TodoEditing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleOnchange = this.handleOnchange.bind(this)
  }

  handleOnchange(e){
    this.props.handleTxtOnchange(e.target.value)
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
                value={this.props.editing.text}
                onChange={this.handleOnchange}
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
  return bindActionCreators({ toggleEditing, handleTxtOnchange}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoEditing);