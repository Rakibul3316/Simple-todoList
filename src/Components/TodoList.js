import React, { Component } from "react";
import Item from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>I am from TodoList</h1>
        <Item />
      </div>
    );
  }
}

export default TodoList;
