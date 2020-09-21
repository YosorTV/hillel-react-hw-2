import React, { Component, Fragment } from 'react'
import classes from './TodoForm.module.css';

export default class TodoForm extends Component {

  render() {
    return (
      <Fragment>
        <form className={classes.TodoForm} onSubmit={this.props.addTodo}>
          <input 
            type="text" 
            placeholder="New Task" 
            onChange={this.props.handleInput} 
            value={this.props.task.title}
          />
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </Fragment>
    )
  }
}
