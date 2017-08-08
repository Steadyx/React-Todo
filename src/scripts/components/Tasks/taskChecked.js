import React, { Component } from 'react';

class Checked extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: null
		};
		this.isCompleted = this.isCompleted.bind(this);
	}

	isCompleted(event) {
		if(event.target) {
			this.setState({
				isChecked: true
			})
		}else {
		this.setState({
			isChecked: false
		})
	}
		console.log(this.state.isChecked);
	}

	render() {
		return <input type="checkbox" onChange={this.isCompleted} />;
	}
}

export default Checked;
