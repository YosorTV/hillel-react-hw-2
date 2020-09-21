import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import classes from './App.module.css'

export default class App extends Component {
  state = {
    todoListItems: [
      {
        id: 1,
        title: 'Create Todo-list-app',
        isDone: true
      },
      {
        id: 2,
        title: 'Visit lesson - 3',
        isDone: false
      },
    ],
    currentItem:{
      id:'',
      title:'',
      isDone: false
    },
  }

  toggleTodo = id => {
    this.setState({
      todoListItems: this.state.todoListItems.map((item) => {
        if (item.id !== id) return item
        return {...item, isDone: !item.isDone}
      })
    })
  }

  deleteTodo = id => {
    const filteredItems = this.state.todoListItems.filter(item => item.id !== id);
    this.setState({ todoListItems:filteredItems })
  }

  handleInput = ({target}) => {
    this.setState({
      currentItem: {
        id: Date.now(),
        title:target.value,
        isDone: false
      }
    })
  }

  addTodo = (e) => {
    e.preventDefault();
    const newTodo = this.state.currentItem;
    if(newTodo.title !== '') {
      const newTodos = [...this.state.todoListItems, newTodo];
      this.setState({
        todoListItems: newTodos,
        currentItem:{
          id:'',
          title:'',
          isDone:false
        },
      })
    }

  }

  render() {
    return (
      <header>
        <div className={classes.Wrapper}>
          <h1>Hillel</h1>
          <span>Homework - 2</span>
        </div>
        <div className={classes.TodoWrapper}>
          <h2>Todo List</h2>
          <TodoForm 
            addTodo={this.addTodo}
            handleInput={this.handleInput}
            task={this.state.currentItem}
          />
          <TodoList 
            todos={this.state.todoListItems}
            onToggle={this.toggleTodo}
            onDelete={this.deleteTodo}
          />
        </div>
      </header>
    )
  }
}
