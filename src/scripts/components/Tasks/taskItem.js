import React, { Component } from "react";
import Completed from "./taskCompleted";

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      indexValue: 0
    };
    this.componentChecked = this.componentChecked.bind(this);
    this.createIndex = this.createIndex.bind(this);
  }

  componentChecked(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      isChecked: value
    });
    console.log(this.state.isChecked);
  }
  createIndex(event) {
    this.setState({
      indexValue: parseInt(event.target.id)
    });
    console.log(this.state.indexValue);
  }
  render() {
    const checklistItems = this.props.createItemList.map((values, index) => {
      return (
        <div className="check-list-row" key={index} id={index}>
          <input
            type="checkbox"
            onChange={this.componentChecked}
            value={this.state.isChecked}
            onClick={this.createIndex}
            id={index}
          />
          <div>
            {values}
          </div>
        </div>
      );
    });

    return (
      <div className="check-list-row-container">
        <div className="todo-row">
          {checklistItems}
        </div>
        <Completed
          isTaskChecked={this.state.isChecked}
          arrayItems={this.props.createItemList}
          indexValue={this.state.indexValue}
        />
      </div>
    );
  }
}

export default TaskItem;
