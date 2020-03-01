import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CSSTransition } from 'react-transition-group'
import { deleteTask } from '../../action/index'
import '../task/Task.scss'

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  
  render() {
    let task = this.props.task

    return (
      <div>
        <CSSTransition
          in={!task.deleted}
          classNames="fade"
          timeout={300}
        >
          {!task.deleted && (
            <div className="task">
              <input id={task.title} type="checkbox" ></input>
              <label htmlFor={task.title}>{task.title}</label>
              {task.done && (
                <span
                  className="task-delete"
                  onClick={()=>{this.props.deleteTask(task.id)}}
                >
                  <i className="fa fa-trash"></i>
                </span>
              )}

            </div>
          )}
        </CSSTransition>
      </div>

    );
  }
}

Task.propTypes = {
  task: PropTypes.object
}



const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({deleteTask}, dispatch)
}

export default connect( mapDispatchToProps)(Task)