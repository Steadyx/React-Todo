import React, { Component } from "react";
class Completed extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      completedItems: []
    };
    this.checkIfChecked = this.checkIfChecked.bind(this);
    this.createCompletedList = this.createCompletedList.bind(this);
  }
  checkIfChecked(event) {
    console.log("index value is " + this.props.indexValue);
  }

  createCompletedList(nextProps, nextState) {
    const completedIndex = this.props.indexValue;
    const completedArray = this.state.completedItems;
    const isChecked = this.props.isTaskChecked;
    this.props.arrayItems.map((elm, index, arr) => {
      if (completedIndex === index) {
        console.log("working");
        completedArray.push(elm);
        this.setState({
          completedItems: completedArray
        });
      } else {
        console.log("erased");

        this.setState({
          completedItems: []
        });
      }
    });
    console.log(this.state.completedItems);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.completedItems.length >= 0) {
      this.createCompletedList();
      return true;
    } else {
      return false;
    }
    console.log(nextState);
  }

  render() {
    // let completedArray = this.state.completedItems;
    // const retrieveList = completedArray.map((values, index) => {
    //   return (
    //     <div
    //       className={this.props.isTaskChecked ? "checked check-list-row" : ""}
    //       key={index}>
    //       {values}
    //     </div>
    //   );
    // });

    return (
      <div
        className={
          !this.props.isTaskChecked
            ? "hide compleled-container"
            : "compleled-container"
        }>
        <div className="completed-row">
          <h1>Completed</h1>
        </div>
        {this.state.completedItems}
      </div>
    );
  }
}
export default Completed;
