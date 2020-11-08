import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../store/actions/todos';
import classes from './TodoForm.module.css';

function TodoForm({createTodo}) {
  const [title, setTitle] = useState('');

  const inputHandler = ({target}) => setTitle(target.value);
  
  const addTodo = (e) => {
    e.preventDefault();
      createTodo(title);
      setTitle('');
  }
  return (
    <Fragment>
      <form className={classes.TodoForm} onSubmit={addTodo}>
          <input 
            type="text" 
            placeholder="New Task" 
            onChange={inputHandler} 
            value={title}
          />
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </form>
    </Fragment>
  )
}

const mapDispatchToProps = {createTodo};

export default connect(null, mapDispatchToProps)(TodoForm);
