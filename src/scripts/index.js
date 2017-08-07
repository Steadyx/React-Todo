import React, {Component} from 'react';
import reactDom from 'react-dom';
import '../styles/main.css';

// Components
import CreateTask from './components/createTask.js'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<CreateTask />
			</div>
		)
	}
}

reactDom.render(
	<App/>, document.querySelector('.container'))
