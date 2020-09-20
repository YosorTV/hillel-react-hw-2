import React, { Component } from 'react'
import classes from './TodoItem.module.css'

export default class TodoItem extends Component {
  render() {
    return (
      <div className={classes.TodoItem}>
        <button onClick={() => this.props.onToggle(this.props.item.id)}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>

        <span className={this.props.item.isDone ? classes.Done : ''}>{this.props.item.title}</span>
        
        <button onClick={(e) => {
          e.stopPropagation();
            return this.props.onDelete(this.props.item.id)
          }}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}
