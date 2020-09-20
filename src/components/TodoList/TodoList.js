import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends Component {
  render() {
    const todoData = this.props.todos;
    return (
      <div>
        {
          todoData.map((item) => {
          return (
            <TodoItem 
              key={item.id}
              item={item}
              onToggle={this.props.onToggle}
              onDelete={this.props.onDelete}
            />
            )
          })
        }
      </div>
    )
  }
}
