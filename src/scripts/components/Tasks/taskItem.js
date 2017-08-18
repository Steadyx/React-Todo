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

  createIndex(event) {
    let newIndex = parseInt(event.target.getAttribute("data-index"));
    let newStateIndex = (this.state.indexValue = newIndex);
    this.setState(prevState => {
      return { indexValue: newStateIndex };
    });
    console.log("the value index value is", this.state.indexValue);
  }

  componentChecked(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(prevState => {
      return { isChecked: (prevState.isChecked = value) };
    });
    console.log(this.state.isChecked);
  }

  render() {
    const { isChecked } = this.state;

    let checklistItems = this.props.createItemList.map((values, index) => {
      return (
        <div className="check-list-row" key={index}>
          <input
            type="checkbox"
            onClick={this.createIndex}
            onChange={this.componentChecked}
            value={isChecked}
            data-index={index}
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
          isTaskChecked={isChecked}
          arrayItems={this.props.createItemList}
          indexValue={this.state.indexValue}
        />
      </div>
    );
  }
}

export default TaskItem;
