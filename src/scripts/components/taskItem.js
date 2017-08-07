import React from 'react';
const TaskItem = (props) => {
	console.log(props);
	const generateItems = props.getValue.map((values, index) => {
		if(props.isEntered) {
			return (
				<div>
					{values}
				</div>
			)
		}
	})
	return(
		<div>
			{generateItems}
		</div>
	)

}

export default TaskItem;
