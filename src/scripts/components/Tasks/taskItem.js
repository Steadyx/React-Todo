import React from 'react';
import Checked from './taskChecked';
import Completed from './taskCompleted';
const TaskItem = props => {
	console.log(props);
	const checklistItems = props.createItemList.map((values, index) => {
		return (
			<div className="check-list-row" key={index}>
				<Checked isArrayChecked={props.createItemList} />
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
