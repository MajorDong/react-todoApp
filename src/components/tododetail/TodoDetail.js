import React from 'react';
import { CSSTransition } from 'react-transition-group'
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
    this.handleEnter = this.handleEnter.bind(this)
    this.handleExit = this.handleExit.bind(this)
  }

  handleEnter(el) {
    Object.assign(el.style, {
      top: `${this.props.selected.rect.top}px`,
      left: `${this.props.selected.rect.left}px`,
      width: `${this.props.selected.rect.width}px`,
      height: `${this.props.selected.rect.height}px`
    })
    setTimeout(() => {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.props.selected.rect.appWidth}px`,
        height: `${this.props.selected.rect.appHeight}px`
      })
    }, 0)
  }

  handleExit(el) {
    Object.assign(el.style, {
      top: 0,
      left: 0,
      width: `${this.props.unselect.rect.appWidth}px`,
      height: `${this.props.unselect.rect.appHeight}px`
    })
    setTimeout(() => {
      Object.assign(el.style, {
        top: `${this.props.unselect.rect.top}px`,
        left: `${this.props.unselect.rect.left}px`,
        width: `${this.props.unselect.rect.width}px`,
        height: `${this.props.unselect.rect.height}px`
      })
    }, 0)

  }
  render() {
    let selected = this.props.selected
    return (
      <div>
        {!!selected && (
          <CSSTransition
            in={true}
            timeout={500}
            classNames="show"
            onEnter={this.handleEnter}
            onExit={this.handleExit}
          >
            <div className="todo-detail">
              <Appbar leftfuc={this.props.unselectTodo} />
              <Todo todo={selected.todo} />
            </div>
          </CSSTransition>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    unselect: state.unselect,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ unselectTodo }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail);