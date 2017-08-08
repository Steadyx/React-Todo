import React, { Component } from 'react';
//Components
import TaskItem from './taskItem';

class CreateTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			isEntered: false,
			isListed: []
		};
		this.renderText = this.renderText.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
	}

	renderText(text) {
		this.setState({ term: text.target.value});
	}
	handleEnter(event) {
		const key = event.keyCode || event.charCode;
		const listItem = this.state.isListed;
		if (key === 13 ) {
			listItem.push(this.state.term);
			this.setState({
				isEntered: true,
				isListed: listItem,
				term: ''
			});
		}

		console.log(this.state.isEntered);
	}
	render() {
		return (
			<div className="form-container">
				<form onSubmit={event => event.preventDefault()}>
					<div className="form-flex">
						<input
							type="text"
							onChange={this.renderText}
							onKeyPress={this.handleEnter}
							value={this.state.term}
							placeholder="Please Write some things down"
						/>
					</div>
					<TaskItem
						getValue={this.state.term}
						checkEntered={this.state.isEntered}
						createItemList={this.state.isListed}
					/>
				</form>
			</div>
		);
	}
}

export default CreateTask;
