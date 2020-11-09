import React from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import classes from './App.module.css'

export default function App() {
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
