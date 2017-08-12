import React, { Component } from 'react';
import Completed from './taskCompleted';

class Checked extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false
		};
		this.componentChecked = this.componentChecked.bind(this);
		this.populateCompleted = this.populateCompleted.bind(this);
	}

	componentChecked(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		if (value) {
			this.setState({
				isChecked: value
			});
			console.log('checked');
		}
	}
	populateCompleted() {}
	render() {
		return (
			<div>
				<input type="checkbox" onChange={this.componentChecked} />
			</div>
		);
	}
}

export default Checked;
