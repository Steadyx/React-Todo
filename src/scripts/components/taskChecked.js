import React, { Component } from 'react';

class Checked extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: null
		};
		this.isCompleted = this.isCompleted.bind(this);
	}

	isCompleted(event) {
		if (event.target.clicked) {
			this.setState({
				checked: true
			});
		}
	}

	render() {
		return <input type="checkbox" onChange={this.isCompleted} />;
	}
}

export default Checked;
