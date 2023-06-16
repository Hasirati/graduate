import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import Header from './Header'

class Header extends Component {
	state = {
		visible: false,
	}

	toggle = () => {
		this.setState(prevState => ({
			visible: !prevState.visible,
		}))
	}

	render() {
		return (
			<Header
				toggle={this.toggle}
				homePaper={0}
				catalogPaper={0}
				menuPaper={0}
				aboutPaper={0}
				visible={this.state.visible && <Modal />}
			/>
		)
	}
}

export default Header
