import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { doneTask, deleteTask } from '../../action/index'
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
        {!task.deleted && (

          <div className="task">
            <div
              className="task-title"
            >
              {task.title}
            </div>
            {!task.done && (
              <span
                onClick={() => {
                  this.props.doneTask({ task })
                }}
                className="task-done"
              >
                <i className="fa fa-check-circle"></i>
              </span>
            )}

            {task.done && (
              <span
                className="task-delete"
                onClick={() => {
                  this.props.deleteTask({ task })
                }}
              >
                <i className="fa fa-trash"></i>
              </span>
            )}

          </div>
        )}
      </div>

    );

  }
}

Task.propTypes = {
  task: PropTypes.object
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { doneTask, deleteTask },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)