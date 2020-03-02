import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
          {!task.deleted && (
            <div className="task">
              <input id={task.title} type="checkbox" ></input>
              <label htmlFor={task.title}>{task.title}</label>
              {task.done &&(
                <span
                  className="task-delete"
                  onClick={()=>{
                    this.props.deleteTask({task})
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

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { deleteTask },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)