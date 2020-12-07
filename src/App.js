import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./Components/TodoList";
import TodoItem from "./Components/TodoItem";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake Up" },
      { id: 2, title: "Breakfast" },
    ],
    item: "",
    id: uuidv4(),
    editItem: "",
  };

  handleChange = (e) => {
    console.log(e);
  };
  handleSubmit = (e) => {
    console.log(e);
  };
  clearList = () => {
    console.log("celar list");
  };
  handleEdit = (id) => {
    console.log(`Handle Edit ${id}`);
  };
  handleDelet = (id) => {
    console.log(`Handle Delet ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-center text-capitalize">todo list</h3>
            <TodoItem
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelet={this.handleDelet}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
