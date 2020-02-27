import React from 'react';
import { connect } from 'react-redux'
import GradientColor from '../gradientcolor/GradientColor'
import './Gradient.scss'

class Gradient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="gradient">
        {this.props.todos.map((todo, index)=>(
          <GradientColor 
            key={todo.name}
            colors={todo.colors}
            active={index <= this.props.currentIndex}
          />
        ))}
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return{
    todos: state.todos,
    currentIndex: state.currentIndex
  }
}

export default connect(mapStateToProps,)(Gradient);