import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

class App extends Component {
  state = {
    items: [],
    item: "",
    id: uuidv4(),
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleEdit = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState(
      {
        items: filterItems,
        item: selectedItem.title,
        id: id,
        editItem: true,
      },
      console.log(this.state)
    );
  };
  handleDelete = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItems,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-center text-capitalize">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
