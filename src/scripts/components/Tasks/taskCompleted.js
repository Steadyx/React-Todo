import React, { Component } from "react";

class Completed extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      completedItems: []
    };
    this.checkIndex = this.checkIndex.bind(this);
    this.createCompletedList = this.createCompletedList.bind(this);
  }
  checkIndex(event) {
    console.log("index value is " + this.props.indexValue);
  }
  createCompletedList() {
    const completedIndex = this.props.indexValue;
    const completedArray = this.state.completedItems;
    const isChecked = this.props.isTaskChecked;
    if (completedIndex) {
      completedArray.push(this.props.arrayItems[completedIndex]);
      this.setState(prevState => {
        return { completedItems: completedArray };
      });
    }
    console.log(this.state.completedItems);
  }

  componentDidUpdate(prevProps, prevState) {
    this.createCompletedList();
    return true;
  }
  render() {
    let completedArray = this.state.completedItems;
    const retrieveList = completedArray.map((elm, index, arr) => {
      return (
        <div className="check-list-row checked" key={index}>
          {elm}
        </div>
      );
    });
    return (
      <div
        className={this.props.isTaskChecked ? "compleled-container" : "hide"}>
        <div className="completed-row">
          <h1>Completed</h1>
        </div>
        <div>
          {retrieveList}
        </div>
      </div>
    );
  }
}
export default Completed;
