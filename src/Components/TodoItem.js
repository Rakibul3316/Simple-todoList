import React, { Component } from "react";
import Item from "./TodoList";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <h1>I am from TodoItem</h1>
        <Item />
      </div>
    );
  }
}

export default TodoItem;
