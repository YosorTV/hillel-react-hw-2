import React from 'react'
import classes from './TodoItem.module.css'

function TodoItem({item, onToggleTodo, onDeleteTodo}) {
  return (
    <div className={classes.TodoItem}>
      <button onClick={() => onToggleTodo(item.id)}>
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
      <span className={item.isDone ? classes.Done : ''}>{item.title}</span>
      <button onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(item.id)
      }}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>
  )
}

export default TodoItem
