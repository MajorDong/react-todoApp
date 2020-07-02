import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './appbar.scss'



class AppBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		this.handleClick = this.handleClick.bind(this)
		this.handleClickNull = this.handleClickNull.bind(this)
	}
	handleClick(e) {
		e.stopPropagation()
		this.props.leftfuc()
	}
	handleClickNull() {

	}
	render() {
		return (
			<div className="appBar" >
				<span onClick={!!this.props.selected ? this.handleClick : this.handleClickNull}>
					<i className={`fa fa-${this.props.left}`}></i>
				</span>
				<h1>{this.props.title}</h1>
				<span>
					<i className={`fa fa-${this.props.right}`}></i>
				</span>
			</div>
		);
	}
}
AppBar.propTypes = {
	title: PropTypes.string,
	left: PropTypes.string,
	right: PropTypes.string,
	leftfuc: PropTypes.func
}
AppBar.defaultProps = {
	title: '',
	left: 'chevron-left',
	right: 'ellipsis-v'
}

const mapStateToProps = (state) => {
	return {
		selected: state.selected
	}
}

export default connect(mapStateToProps)(AppBar);