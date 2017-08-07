import React from 'react';
import Checked from './taskChecked';
const TaskItem = props => {
	console.log(props);
	let id = 0;
	const checklistItems = props.createItemList.map((values, index) => {
		id++;
		return (
			<div className="check-list-row" key={index}>
				<Checked />
				<div>
					{values}
				</div>
			</div>
		);
	});

	return (
		<div className="check-list-row-container">
			{checklistItems}
		</div>
	);
};

export default TaskItem;
