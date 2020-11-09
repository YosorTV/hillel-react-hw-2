import React from 'react'
import classes from './TodoItem.module.css'

function TodoItem({item, onItemToggle, onItemDelete }) {
  return (
    <div className={classes.TodoItem}>
      <button onClick={() => onItemToggle(item.id)}>
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
      <span className={item.isDone ? classes.Done : ''}>{item.title}</span>
      <button onClick={(e) => {
        e.stopPropagation();
        onItemDelete(item.id)
      }}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>
  )
}

export default TodoItem
