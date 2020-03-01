import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleEditing } from '../../action/index'
import './FloatingButton.scss'

class FloatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    let { editing, selected, currentTodo } = this.props


    const gradientcolor = () => {
      const colorLeft = `color-stop(30%, ${currentTodo.colors[0]})`
      const colorRight = `to(${currentTodo.colors[1]})`
      return `-webkit-gradient(linear, left bottom, right top, ${colorLeft}, ${colorRight})`
    }

    return (
      <div>
        {!!selected && (      
            <button
              className={
                !!editing ?
                  'floating-button floating-button-editing' :
                  'floating-button'
              }
              style={{ backgroundImage: gradientcolor() }}
              onClick={this.props.toggleEditing}
            >
              <span>+</span>
            </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentTodo = state.todos[state.currentIndex]

  return {
    editing: state.editing,
    selected: state.selected,
    currentTodo: currentTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleEditing }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FloatingButton);