import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      todoItems: []
    }
  }

  render() {
    return (
      <div className="form">
        <div className="header">
          <h2>Camel`s TodoList!</h2>
          <input type="text" placeholder="anything write here"></input>
          <span className="add-btn">Add</span>
        </div>
        <TodoList></TodoList>
      </div>
    )
  }
}

export default App;
