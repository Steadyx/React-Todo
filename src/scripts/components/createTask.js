import React, { Component } from 'react';
//Components
import TaskItem from './taskItem';

class CreateTask extends Component {
	constructor(props) {
		super(props)

		this.state = {
			term: [],
			isEntered: false
		};
		this.renderText = this.renderText.bind(this);
		this.handleEnter = this.handleEnter.bind(this);

	}

	renderText(term) {
		this.setState({ term: [term.target.value] })
	}
	handleEnter(event) {
		if(event.key == 'Enter') {
			this.setState({
				isEntered: true
			})
		}
		console.log(this.state.isEntered);
	}
	render() {
		return(
			<div className="form-container">
				<form onSubmit={event => event.preventDefault()}>
					<div className="form-flex">
						<label>Make a List</label>
						<input type="text" onChange={this.renderText} onKeyPress={this.handleEnter} value={this.state.term}/>
					</div>
				</form>
				<TaskItem getValue={this.state.term} checkEntered={this.state.isEntered}/>
				</div>
		)
	}
}

export default CreateTask;
