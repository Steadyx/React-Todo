import React, { Component } from 'react';

class Completed extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			completedItems: []
		};
		this.checkIfChecked = this.checkIfChecked.bind(this);
	}
	checkIfChecked(event) {
		console.log('index value is ' + this.props.indexValue);
	}
	createCompletedList(event) {
		const completedIndex = this.props.indexValue;
		const completedArray = this.state.completedItems;
		this.props.arrayItems.filter((elm, index, arr) => {
			if (index === completedIndex) {
				completedArray.push(elm);
				this.setState({
					completedItems: completedArray
				});
			}
		});
		console.log(this.state.completedItems);
	}
	render() {
		const renderItems = () => {
			this.createCompletedList;
		};
		return (
			<div className={!this.props.isTaskChecked ? 'hide' : ''}>
				<div>
					<h1>Completed</h1>
				</div>
				<div renderItems={this.createCompletedList}>
					{this.state.completedItems}
				</div>
			</div>
		);
	}
}
export default Completed;
