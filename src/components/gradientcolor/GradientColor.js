import React from 'react';
import PropTypes from 'prop-types'
import './GradientColor.scss'

const GradientColor = (props) =>{
  const theColor = () =>{
    const colorBottom = `color-stop(30%, ${props.colors[0]})`
    const colorTop = `to(${props.colors[1]})`
    return {
      backgroundImage: `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop})`
    }
  }

  return (
    <div
      className={props.active ? 'gradientColor gradientColor-active': 'gradientColor'}
      style={theColor()}
    >
    </div>
  )
}
GradientColor.propType = {
  active: PropTypes.bool,
  colors: PropTypes.array
}

export default GradientColor