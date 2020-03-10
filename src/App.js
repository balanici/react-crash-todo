import React, {Component} from 'react';
import './components/Todos';

import './App.css';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      {id: 1, title: 'Empty the trash', completed: false},
      {id: 2, title: 'Dinner with wife', completed: false},
      {id: 3, title: 'Meeting with client', completed: false}
    ]
  }

  // Toggle complete
  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;