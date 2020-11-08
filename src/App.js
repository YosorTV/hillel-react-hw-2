import React from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import classes from './App.module.css'

export default function App() {

  // toggleTodo = id => {
  //   this.setState({
  //     todoListItems: this.state.todoListItems.map((item) => {
  //       if (item.id !== id) return item
  //       return {...item, isDone: !item.isDone}
  //     })
  //   })
  // }

  // deleteTodo = id => {
  //   const filteredItems = this.state.todoListItems.filter(item => item.id !== id);
  //   this.setState({ todoListItems:filteredItems })
  // }

  // handleInput = ({target}) => {
  //   this.setState({
  //     currentItem: {
  //       id: Date.now(),
  //       title:target.value,
  //       isDone: false
  //     }
  //   })
  // }

  // addTodo = (e) => {
  //   e.preventDefault();
  //   const newTodo = this.state.currentItem;
  //   if(newTodo.title !== '') {
  //     const newTodos = [...this.state.todoListItems, newTodo];
  //     this.setState({
  //       todoListItems: newTodos,
  //       currentItem:{
  //         id:'',
  //         title:'',
  //         isDone:false
  //       },
  //     })
  //   }

  // }
    return (
      <header>
        <div className={classes.Wrapper}>
          <h1>Hillel</h1>
          <span>Todo-App</span>
        </div>
        <div className={classes.TodoWrapper}>
          <h2>Todo List</h2>
          <TodoForm />
          <TodoList />
        </div>
      </header>
    )
}
